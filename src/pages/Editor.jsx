import { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import CodeEditor from "../components/CodeEditor";
import initSocket from "../socket-io";
import { ACTIONS } from "../Action.js";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditorPage = () => {

  const socketRef  = useRef(null); // component rerender nahi hota hai ismai.
  const params = useParams();
  const location = useLocation();
  const reactNavigator = useNavigate();
  useEffect(() => {
        const init = async () =>{
            socketRef.current = await initSocket();
            socketRef.current.on('connect_error'  , (err) => handle_error(err));
            socketRef.current.on('connect_failed' ,(err) => handle_error(err));


            const handle_error = (e) => {
                console.log('Socket error' , e);
                toast.error('Socket Connection failed, try again later');
                reactNavigator('/'); 

            }
            

            socketRef.current.emit(ACTIONS.JOIN , { // event emit kar rahe hai join ka this we have listen on the server.
               roomId : params?.roomId, 
               username : location.state?.username, 
            })
            
        }
        init();
        console.log("params", params.roomId);
  },[location , params]);


  if(!location.state){
    return <Navigate to={'/'}/>
  }

  const [clients, setClients] = useState([
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "John Doe" },
    { socketId: 2, username: "John Doe" },
    { socketId: 2, username: "John Doe" },
    { socketId: 2, username: "John Doe" },
  ]);

  const onLeave = () => {};

  return (
    <div className="main-wrap flex h-screen">
      <div className="aside flex items-start flex-col justify-between w-[16%]">
        <div className="asideInner w-full">
          <div className="logo flex items-end">
            <img className="logoImage" src="/icons8-code-48.png" alt="logo" />
            <span className="size-7 font-extrabold">CodeCollab<span className="text-green-400">.</span>io</span>
          </div>
          <h3 className="pt-3">Connected -{`>`}</h3>
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
          <button className="btn copyBtn bg-white w-full text-black text-sm py-2">Copy ROOM ID</button>
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
        <CodeEditor/>
      </div>
    </div>
  );
};

export default EditorPage;
