import express from 'express';

import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
const app = express();
import { ACTIONS } from './src/Action.js';
import { Server } from 'socket.io';
import { createServer } from 'http';

const server = createServer(app);

const io = new Server(server);

const userSocketMap = {

}


app.get('/', (req ,res) => {
    res.send('done');
})

io.on('connection' , (socket) => {
    console.log('a user is conneted' , socket.id );

    socket.on(ACTIONS.JOIN , (roomId , username) => {
        
        userSocketMap[socket.id] = username;
        socket.join(roomId);
    })
})


server.listen(PORT , () => {
  console.log(`server is running at http://localhost:${PORT}`);
})
