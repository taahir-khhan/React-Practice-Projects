import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberIncluded, setNumberIncluded] = useState(false);
  const [specialCharIncluded, setSpecialCharIncluded] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const randomPasswordGenerator = useCallback(() => {
    let pass = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberIncluded) char += "0123456789";
    if (specialCharIncluded) char += "@#$%&*><[]";

    for (let i = 0; i < length; i++) {
      let charIdx = Math.floor(Math.random() * char.length);
      pass += char.charAt(charIdx);
    }

    setPassword(pass);
  }, [length, numberIncluded, specialCharIncluded]);

  useEffect(() => {
    randomPasswordGenerator();
  }, [randomPasswordGenerator]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="container">
      <div className="app_container">
        <h1>Random Password Generator</h1>
        <div className="input_box">
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button className="copy" onClick={copyToClipboard}>
            Copy
          </button>
        </div>

        <div className="input_box-2">
          <div>
            <input
              type="range"
              min={8}
              max={20}
              id="rangeInput"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="rangeInput">Length {length}</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="numberCheckbox"
              checked={numberIncluded}
              onChange={() => {
                setNumberIncluded((prev) => !prev);
              }}
            />
            <label htmlFor="numberCheckbox">Include Numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="charCheckbox"
              checked={specialCharIncluded}
              onChange={() => {
                setSpecialCharIncluded((prev) => !prev);
              }}
            />
            <label htmlFor="charCheckBox">Include Characters</label>
          </div>
        </div>

        <div className="btn">
          <button className="generate" onClick={randomPasswordGenerator}>
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
