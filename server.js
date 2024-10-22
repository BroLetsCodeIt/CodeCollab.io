/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';

import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
const app = express();
import { ACTIONS } from './src/Action.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
import path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

import cors from 'cors';

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const server = createServer(app);

const io = new Server(server); // io is the instance listening for the clients to connect.

const userSocketMap = {}


app.use(express.static("dist")); // this will serve build/index.html page from the server side . [not from client side]
// app.use(express.static(path.join(__dirname, 'dist' , 'index.html')));


app.use((req, res, next) =>{
   res.sendFile(path.join(__dirname,"dist", "index.html"));
})


function getAllConnectedClients(roomId){
   console.log("called") 
   // Array.from return the Array 
   // map over the array 
   // map returns the new array by mapping over the array values

   // [...rooms] -> this is also a new way to get the array used in line 69

   return  Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
      return{
         socketId , 
         username : userSocketMap[socketId]
      }
   });
}

io.on('connection' , (socket) => {
    console.log('a user is conneted' , socket.id );

    socket.on(ACTIONS.JOIN , ({roomId , username}) => {
        
        userSocketMap[socket.id] = username;
        socket.join(roomId);

        // get notify to all other clients that new client has joined the room 
        const clients = getAllConnectedClients(roomId);

        console.log("Clients",clients);

        // getting all the clients in the room 
        clients.forEach(({socketId}) => {
           io.to(socketId).emit(ACTIONS.JOINED , {
               clients , 
               username , 
               socketId : socket.id
           })
        })
    });

    socket.on(ACTIONS.CODE_CHANGE , ({roomId , code , currenttheme}) => {
       socket.in(roomId).emit(ACTIONS.CODE_CHANGE , {
            code,
            currenttheme
       })
    })

    socket.on(ACTIONS.SYNC_CODE , ({code , socketId}) => {
       io.to(socketId).emit(ACTIONS.CODE_CHANGE , {
          code , 
          socketId
       })
    })


    // completely socket disconnect hone se phele .

    // it will run when someone close the browser etc 
    socket.on('disconnecting' , ()=>{

        const rooms = [...socket.rooms];

        rooms.forEach((roomId) => {
             socket.in(roomId).emit(ACTIONS.DISCONNECTED , {
                socketId : socket.id , 
                username : userSocketMap[socket.id]
             })
        })

        delete userSocketMap[socket.id];
        socket.leave();
    })

    // there is disconnect method also which can be used when user is disconnected;

})


server.listen(PORT , () => {
  console.log(`server is running at http://localhost:${PORT}`);
})
