import React, { useState } from "react"

export default function TextForm(props){
    function handleChange(event){
        setText(event.target.value);
        setCount(len());
    }
    function handleUpperCase(event){
        setText(text.toUpperCase())
        props.handleAlert('Text converted to UpperCase!','success')
    }
    function handleLowerCase(event){
        setText(text.toLowerCase())
        props.handleAlert('Text converted to LowerCase!','success')
    }
    function handleClear(event){
        setText("")
        props.handleAlert('Text Cleard!','success')
    }
    function handleCopy(){
        let copiedText=document.getElementById('textForm')
        copiedText.select(); 
        navigator.clipboard.writeText(copiedText.value)
        props.handleAlert('Text Copied!','success')
    }
    function len(){
        let arr=text.split(/[ ]+/)
        return arr.length;
    }
    function handleSpaces(){
        let arr=text.split(/[ ]+/)
        setText(arr.join(" "))
        props.handleAlert('Extra spaces removed!','success')
    }
    const[text, setText] = useState(""); // return array;
    const[count, setCount] = useState(0);
    return(
        <>
        <div className="mb-3">
            <label htmlFor="textForm" className="form-label" style={props.mode==='dark'?{color:"white"}:null}><h3>{props.heading}</h3></label>
            <textarea className="form-control" value={text} id="textForm" rows="3" onChange={handleChange} style={props.mode==='dark'?{backgroundColor:"#212529", color:"white"}:null}></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpperCase}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLowerCase}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleSpaces}>Remove Extra Spaces</button>
        <div className="my-3" style={props.mode==='dark'?{color:"white"}:null}>
            <h3>Your Text Summary</h3>
            <div>{text.length===0?0:count} words and {text.length} characters</div>
            <div>Reading time: {text.length===0?0:(text.split(' ').length)*0.005} mins</div>
            <h3 className="my-2">Preview</h3>
            <p>{text.length>0?text:'TextBox is Empty'}</p>
        </div>
        </>
    )
}