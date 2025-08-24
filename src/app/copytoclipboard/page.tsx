"use client";

import { useState } from "react";

const CopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");

  const copyHandler = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  return (
    <div>
      <h1>Copy to Clipboard</h1>
      <div>
        <label>Copy from Textbox</label>
        <br />
        <textarea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ backgroundColor: copied ? "green" : "white" }}
        ></textarea>
        <br />
        <button onClick={copyHandler}>
          {copied ? "Copied" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
};

export default CopyToClipboard;
