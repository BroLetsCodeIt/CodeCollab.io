import CodeMirror from "@uiw/react-codemirror";

//  languages
import { javascript } from "@codemirror/lang-javascript";

// themes
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { aura } from "@uiw/codemirror-theme-aura";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { githubDark } from "@uiw/codemirror-theme-github";
import { githubLight } from "@uiw/codemirror-theme-github";
import { monokai } from "@uiw/codemirror-theme-monokai";

import { sublime } from "@uiw/codemirror-theme-sublime";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { useState } from "react";

// type themeProps = {
//   okaidia : Extension,
//   aura : Extension,
//   dracula : Extension,  
//   darcula :  Extension,
//   githubDark : Extension,
//   githubLight : Extension,
//   monokai : Extension,
//   sublime : Extension,
//   vscodeDark :Extension,
//   vscodeLight : Extension,
// }
const themes = {
  okaidia : okaidia,
  aura : aura,
  dracula : dracula ,  
  darcula : darcula ,
  githubDark : githubDark ,
  githubLight : githubLight,
  monokai : monokai ,
  sublime : sublime,
  vscodeDark : vscodeDark ,
  vscodeLight : vscodeLight,
};

const CodeEditor = () => {
  const [codingvalue, setCodingValue] = useState("// Type code here");
  const [currenttheme, setCurrentTheme] = useState("okaidia");
  const [fontSize, setFontSize] = useState(16);



  return (
    <>
      {/* <label htmlFor="theme">Theme : </label> */}
      <div className="flex gap-3">
        <select
          name="theme"
          id="theme"
          className="bg-gray-900 px-1 py-1 rounded-md mb-1 border-2 border-gray-600 text-sm"
          onChange={(e) => {
            setCurrentTheme(e.target.value);
          }}
          value={currenttheme}
          defaultValue={currenttheme}
        >
          <option value="aura">Aura</option>
          <option value="dracula">Dracula</option>
          <option value="darcula">Darcula</option>
          <option value="githubDark">Github Dark</option>
          <option value="githubLight">Github Light</option>
          <option value="monokai">Monokai</option>
          <option value="sublime">Sublime</option>
          <option value="vscodeDark">VS Code Dark</option>
          <option value="vscodeLight">VS Code Light</option>
          <option value="okaidia" selected>
            Okaidia
          </option>
        </select>
        <div className="border-2 border-gray-600 px-1 gap-2 text-sm rounded-md flex items-center justify-between mb-1">
          <small>Font-Size : </small>
          <button
            disabled={fontSize <= 15}
            className={`${
             fontSize <= 15
                ? "cursor-not-allowed"
                : "hover:bg-gray-400/50"
            } bg-gray-400 rounded-md px-2 `}
            onClick={() => {setFontSize(fontSize - 1)}}
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
      </div>
      <CodeMirror
        value={codingvalue}
        extensions={[javascript({ jsx: true })]}
        onChange={(value, _viewUpdate) => {
          setCodingValue(value);
        }}
        theme={themes[currenttheme]}
        height="710px"
        className={`text-[16px]`}
      />
    </>
  );
};

export default CodeEditor;
