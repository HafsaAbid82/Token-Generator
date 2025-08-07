import { useState } from "react";
import './Tg.css';

const Tg = () => {
  let [length, setLength] = useState(1);
  let [text, setText] = useState("");
  let [useSymbols, setUseSymbols] = useState(true);
  let [useNumbers, setUseNumbers] = useState(true);
  let [useLowerCase, setUseLowerCase] = useState(true);
  let [useUpperCase, setUseUpperCase] = useState(true);
  let generateText = () => {
    let charset = "",
      refresh = "";
        if (useSymbols) charset += "!@#$%^&*()";
        if (useNumbers) charset += "0123456789";
        if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let i = 0; i < length; i++) {
            refresh += charset.charAt(Math.floor(Math.random() * charset.length ));

        }
        setText(refresh);
      };
      const handleGenerate = () =>
        {
          generateText();
          }
  let handleCopy = () => {
        navigator.clipboard.writeText(text);
  };
  return (
    <div className="block">
      <h1>Token generator</h1>
      <p>Generate random string with the chars you want, uppercase or lowercase letters, numbers and/or symbols.</p>
      <div className="card">
        <div className='display'>
          <p className='card_switch'>Uppercase (ABC...)  
        <label className='switch'>
       <input type='checkbox' checked={useUpperCase} onChange={() => setUseUpperCase(!useUpperCase)} />
        <span className="slider round"></span>
        </label>
        </p>
        <p className='card_switch'>Numbers (123...)  
        <label className='switch'>
        <input type='checkbox' checked={useNumbers}  onChange={() => setUseNumbers(!useNumbers)} />
        <span className="slider round"></span>
        </label>
        
        </p>
        </div>
         <div className='display'>
        <p className='card_switch'>Lowercase (abc...)  
        <label className='switch'>
        <input type='checkbox' checked={useLowerCase} onChange={() => setUseLowerCase(!useLowerCase)} />
        <span className="slider round"></span>
       </label>
       </p>
       <p className='card_switch'>Symbols (!-;...)  
        <label className='switch'>
        <input type='checkbox'  checked={useSymbols}  onChange={() => setUseSymbols(!useSymbols)}/>
        <span className="slider round"></span>
        </label>
        </p>
        </div>
      <label className='display'>Length: ({length})
    <input type='range' min={1} max={512} value={length} className="range" onChange={(e) => setLength(e.target.value)} onChangeCapture={generateText} />
    </label>
    <textarea rows={5} readOnly className="textarea" value={text} onClick={() => handleGenerate(text)} />
    

      <div className='card_btn'>
      <button onClick={handleCopy} >Copy</button>
      <button onClick={generateText}>Refresh</button>
      </div>
      </div>
    </div>
  );
};

export default Tg;