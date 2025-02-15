import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [QRValue, setQRValue] = useState("");

  return (
    <div className='flex flex-col items-center justify-center gap-4 px-2 py-4 rounded-lg mt-4 max-w-[600px] mx-auto bg-pink-600'>
      <h1 className='text-2xl font-bold'>QR Code Generator</h1>

      <div className='flex gap-2 items-center justify-center'>
        <input
          type='text'
          className='border-none outline-none px-2 py-2 rounded-lg placeholder:italic text-black'
          placeholder='Enter your text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className='border-none outline-none px-6 py-2 bg-black text-white font-medium rounded-lg disabled:bg-gray-700'
          onClick={() => {
            setQRValue(input);
            setInput("");
          }}
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generate
        </button>
      </div>

      <QRCode value={QRValue} size={400} bgColor='white' />
    </div>
  );
}

export default QRCodeGenerator;
