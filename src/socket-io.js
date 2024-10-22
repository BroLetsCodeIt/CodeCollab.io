/* eslint-disable no-undef */

import { io } from 'socket.io-client';



const URL = import.meta.env.NODE_ENV === "production" ? "https://codecollab-io.onrender.com/" : "https://codecollab-io.onrender.com/";

// import.meta.env.VITE_APP_BACKEND_URL

const initSocket = async () => {
    const options  = {
        'force new connection' : true  , 
         reconnectionAttempt : 'Infinity' ,
         timeout : 100000 ,
         transports : ['websocket']
    };

    return io(URL , options)

}


export default initSocket ;