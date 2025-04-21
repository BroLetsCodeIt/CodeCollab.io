import  { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {            // if this was not there then we have to use redux store , local storage  , params ke through access karna padtha.
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="homePageWrapper">
            <div className="formWrapper text-sm shadow-sm border-gray-300 border-2">
                {/* <img
                    className="homePageLogo rounded-md"
                    src="/code_collab.webp"
                    alt="code-sync-logo"
                /> */}
                <h4 className="mainLabel text-black tracking-tight">Join with a Room ID   <span className='italic text-blue-400'>or</span> create a new one.</h4>
                <div className='w-full   border-b border-1 border-gray-200'></div>
                <div className="inputGroup pt-4">
                    <label htmlFor="roomId" className='block mb-2 text-sm font-medium text-gray-900 '>Room ID</label>
                    <input
                        id='roomId'
                        name='roomId'
                        type="text"
                        className="inputBox text-black "
                        placeholder="Room Id"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                        required
                
                    />
                    <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900'>User Name</label>
                    <input
                        id='username'
                        name='username'
                        type="text"
                        className="inputBox text-black"
                        placeholder="User name"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                        required
                    />
                    <button className="btn joinBtn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={joinRoom}>
                        Join
                    </button>
                    <div className='w-full   border-b border-1 border-gray-200 pt-10'></div>
                    <span className="createInfo">
                        <span className='text-red-500'>*</span> If you don&apos;t have an invite then create &nbsp;
                        <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn text-blue-600"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
            {/* <footer>
                <h4>
                    Built with ❤️ &nbsp; by &nbsp;
                    <a href="https://github.com/BroLetsCodeIt">BroLetsCodeIt</a>
                </h4>
            </footer> */}
        </div>
    );
};

export default Home;