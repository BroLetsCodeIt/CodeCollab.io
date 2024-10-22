/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import CodeEditor from "../components/CodeEditor";
import initSocket from "../socket-io";
import { ACTIONS } from "../Action.js";
import { redirect, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CodeEditorNew from "../components/CodeEditorNew.jsx";


const EditorPage = () => {

  // if we store it in usestate and gets update , then component will be rerender;

  const socketRef = useRef(null); // component rerender nahi hota hai ismai.
  const codeRef = useRef(null);
  const params = useParams();
  const location = useLocation();  // to get the username which was passed from `navigate()` function
  const reactNavigator = useNavigate();
  const [clients, setClients] = useState([
   
  ]);


  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      socketRef.current.on('connect_error', (err) => handle_error(err)); // if there is an error connect_error 
      socketRef.current.on('connect_failed', (err) => handle_error(err));  // If there is an error connect_failed

      const handle_error = (e) => {
        console.log('Socket error', e);
        toast.error('Socket Connection failed, try again later');

        reactNavigator('/');
        return;
      }


      socketRef.current.emit(ACTIONS.JOIN, { // event emit kar rahe hai join ka this we have listen on the server.
        roomId: params?.roomId,
        username: location.state?.username, // add ? if state is undefined then we do not get the warning or error
      })

      // listening for joined event 
      socketRef.current.on(ACTIONS.JOINED, ({ clients, username, socketId }) => {
        if (username !== location.state?.username) {
          toast.success(`${username} joined the room.`)
          console.log(`${username} joined`)
          
        }

        setClients(clients);
        socketRef.current.emit(ACTIONS.SYNC_CODE ,{
          code : codeRef.current ,
          socketId
        });
      })


      // Listening for disconnected 

      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast.success(`${username} left the room.`);

        setClients((prev) => {
          return prev.filter(clients => clients.socketId != socketId);
        })
      
      })

    }
    init();

    // don't forget , all listerns has to clear 
    // so , don't forget it.

    // cleaning function ,
    return () => {
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);       // socket.on event ko unsubscribe karna hai.
      socketRef.current.off(ACTIONS.DISCONNECTED);

    }
  }, [params.roomId, location.state?.username, reactNavigator]);



  if (!location.state) {
    return <Navigate to={'/'} />
  }
  const onLeave = () => {
    console.log("onleavee");
    reactNavigator('/');
  };

  const CopytoClipBoard = () => {

    let url = params.roomId; // get the url 
    // navigator.clipboard.writeText(url); this will also work 
      
    try{
      window.navigator.clipboard.writeText(url); // navigator is the window object 
      toast.success("Copied Successfully")
    }catch(error){
      toast.error("Could not copy room ID ");
    }
   
 
  }
  return (
    <div className="main-wrap flex h-screen">
      <div className="aside flex items-start flex-col justify-between w-[16%]">
        <div className="asideInner w-full">
          <div className="logo flex items-end gap-3">
            <img className="logoImage w-10 h-10 rounded-md" src="/code_collab.webp" alt="logo" />
            <span className="size-7 font-extrabold tracking-tighter">CodeCollab<span className="text-green-400">.</span>io</span>
          </div>
          <h3 className="pt-3 tracking-tighter">Connected</h3>
          <div className="clientsList pt-2  overflow-auto max-h-[30rem]">
            {clients.map((val, ind) => {
              return (
                <div
                  className=" text-black rounded-md flex flex-col items-center"
                  key={ind}
                >
                  <Avatar name={val.username} size="40" round='10px' color="blue" />
                  <small className="text-white">{val.username}</small>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-full">
          <button className="btn copyBtn bg-white w-full text-black text-sm py-2" onClick={CopytoClipBoard}>Copy ROOM ID</button>
          <button
            className="btn leaveBtn text-sm w-full py-2"
            onClick={() => {
              onLeave();
            }}
          >
            Leave
          </button>
        </div>
      </div>

      <div className="editorwrap text-white flex-1 p-2 border-l-2 border-gray-600 w-full h-screen overflow-auto">
        <CodeEditorNew socketRef={socketRef} roomId = {params.roomId} onCodeChange={(code)=> { codeRef.current  = code}}/>
      </div>
    </div>
  );
};

export default EditorPage;

