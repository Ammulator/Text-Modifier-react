import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUPclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert(" Converted to UpperCase","success")
    }
    const handleLCclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert(" Converted to LowerCase","success")
    }
    const handleClearclick=()=>{
        let text='';
        setText(text)
        props.showAlert(" Text Cleared","success")
    }
    const handleCopytext=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert(" Text Copied","success")
    }
    const handleExtraSpace = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra Space Removed","success")
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="my_Box" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUPclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLCclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopytext}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>Your Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
