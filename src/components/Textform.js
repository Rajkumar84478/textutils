import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    console.log("Uppercase was clicked");
    let str = text.toUpperCase();
    setText(str);
    props.showAlert("Converted to Uppercase","success");
  };
  const handleloclick = () => {
    console.log("lowercase was clicked");
    let str = text.toLowerCase();
    setText(str);
    props.showAlert("Converted to Lowercase","success");
  };
  const handleOnchange = (event) => {
    console.log("Onchange was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.mode==='light' ?'#042143' :'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "light" ? "light" : "grey",
              color: props.mode === "light" ? "#042143" : "white",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpclick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleloclick}>
          Convert To lowercase
        </button>
      </div>
      <div className="container" style={{color:props.mode==='light' ?'#042143' :'white'}} >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>1 ?text :"Enter Your Text for preview"}</p>
      </div>
    </>
  );
}
