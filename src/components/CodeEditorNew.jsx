/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"

// ------- all import of codemirror -------------- 
import Codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/theme/darcula.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/abbott.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/vibrant-ink.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';

import 'codemirror/mode/dockerfile/dockerfile'
import { ACTIONS } from "../Action";



const CodeEditorNew = ({socketRef , roomId , onCodeChange}) => {

    const editorRef = useRef(null);

    const [currenttheme, setCurrentTheme] = useState("monokai");
    const [fontSize, setFontSize] = useState(16);
    // const [currentLanguage, setCurrentLanguage] = useState("javascript");

    // initilize the codeeditor 
    useEffect(() => {
        async function init() {
            editorRef.current = Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
                mode: { name: "javascript" , json : true},
                theme: currenttheme,
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true,
            })

            
            editorRef.current.on('change' , (instance , changes) => {
                // console.log(changes);

                const { origin} = changes;

                // console.log(instance.options.mode.name)
                // console.log(instance.options)
                // const language = instance.options.mode.name;
                const code = instance.getValue();

                
                if(origin !== 'setValue'){
                    
                    socketRef.current.emit(ACTIONS.CODE_CHANGE , { roomId , code , currenttheme});
                    onCodeChange(code);
                }
            
            });

            

           


          
            // we can add content dynamically in the editor 
            // editorRef.current.setValue(`console.log("hello world")`);
        }
        init();

      


    }, [  roomId , socketRef]);


    useEffect(()=>{
        if(socketRef.current){
            socketRef.current.on(ACTIONS.CODE_CHANGE , ({code  ,currenttheme})=>{
                if(code != null){
                    console.log("Code is receving",code);
                    editorRef.current.setValue(code);
                    // editorRef.current.options.mode.theme = currenttheme;
                }
            })
        }

        return () => {
            socketRef.current.off(ACTIONS.CODE_CHANGE);
        }
    },[socketRef.current]);

    useEffect(() =>{
        if (editorRef.current) {
            editorRef.current.setOption('theme', currenttheme);
        }
    },[currenttheme]);

    return (
        <>
            <div className="flex gap-3">
                <select
                    name="theme"
                    id="theme"
                    className="bg-gray-900 px-1 py-1 rounded-md mb-1 border-2 border-gray-600 text-sm"
                    onChange={(e) => {
                        
                        setCurrentTheme(e.target.value);
                    }}

                    // defaultValue={themes.okaidia}
                    value={currenttheme}
                    multiple={false}

                // defaultValue={currenttheme}
                >
                    <option value="okaidia">Okaidia</option>
                    <option value="aura">Aura</option>
                    <option value="dracula">Dracula</option>
                    <option value="darcula">Darcula</option>
                    <option value="githubDark">Github Dark</option>
                    <option value="githubLight">Github Light</option>
                    <option value="monokai">Monokai</option>
                    <option value="sublime">Sublime</option>
                    <option value="vscodeDark">VS Code Dark</option>
                    <option value="vscodeLight">VS Code Light</option>
                    <option value="abbott">Abbott</option>
                    <option value="vibrant-ink">Abbott</option>
                   

                </select>

                <div className="border-2 border-gray-600 px-1 gap-2 text-sm rounded-md flex items-center justify-between mb-1">
                    <small>Font-Size : </small>
                    <button
                        disabled={fontSize <= 15}
                        className={`${fontSize <= 15
                                ? "cursor-not-allowed"
                                : "hover:bg-gray-400/50"
                            } bg-gray-400 rounded-md px-2 `}
                        onClick={() => { setFontSize(fontSize - 1) }}
                    >
                        -
                    </button>
                    <button
                        className={`${fontSize >= 22 ? "cursor-not-allowed" : "hover:bg-gray-600/50"} bg-gray-600 rounded-md px-2 `}
                        onClick={() => {
                            setFontSize(fontSize + 1);
                        }}
                        disabled={fontSize >= 22}
                    >
                        +
                    </button>
                </div>

                {/* <select
                    name="language"
                    id="language"
                    className="bg-gray-900 px-1 py-1 rounded-md mb-1 border-2 border-gray-600 text-sm"
                    onChange={(e) => {
                        e.preventDefault();
                        setCurrentLanguage(e.target.value);
                    }}   
                    value={currentLanguage}
                    multiple={false}
                >
                    <option value="javascript">Javascript</option>
                    <option value="python">Python</option>
                    <option value="clike">Clike</option>
                    <option value="dockerfile">DockerFile</option>

                </select> */}


            </div>
            <textarea id="realtimeEditor" className="w-full  h-screen">
                
            </textarea>
        </>
    )
}

export default CodeEditorNew
