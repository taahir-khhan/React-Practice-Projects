import { useCallback, useEffect, useRef, useState } from "react";

function RandomPassword() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "@#$%&*=+";

    for (let i = 0; i < length; i++) {
      let strCharIdx = Math.floor(Math.random() * str.length);
      pass += str.charAt(strCharIdx);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 10);
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1500);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  }, [password]);

  return (
    <div className="password-generator">
      <div className="password-generator__container">
        <h1 className="password-generator__header">
          Random Password Generator
        </h1>

        <div className="password-generator__input-group">
          <input
            type="text"
            placeholder="Password"
            className="password-generator__input-text"
            value={password}
            readOnly
            ref={passwordRef}
          />

          <button
            className="password-generator__copy-btn"
            onClick={copyPasswordToClipboard}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="password-generator__controls">
          <span>
            <input
              type="range"
              className="password-generator__length-control"
              min={8}
              max={20}
              id="rangeInput"
              value={length}
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
            />
            <label htmlFor="rangeInput">Length: {length}</label>
          </span>

          <span>
            <input
              type="checkbox"
              className="password-generator__checkbox-control"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </span>

          <span>
            <input
              type="checkbox"
              className="password-generator__checkbox-control"
              checked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Include Characters</label>
          </span>
        </div>

        <div className="password-generator__actions">
          <button
            className="password-generator__generate-button"
            onClick={passwordGenerator}
          >
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomPassword;
