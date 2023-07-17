import React,{useState} from 'react'

export default function Textform(props) {

    const handleUpclick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowclick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleResetclick =()=>{
        let newText = "";
        setText(newText);
    }

    const handleOnchange =(event)=>{
            setText(event.target.value);
    }

    const[text,setText] = useState("Enter the text");
  return (
    
    <>
    <div className='container'>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="12"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpclick}>convert To Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowclick}>convert To Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleResetclick}>Reset</button>
    </div>
<div className='container my-3'>
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} character</p>
<h2>Preview</h2>
<p>{text}</p>
</div>

    </>
  )
}
