import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
   // console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success")
  }
  const handleLoClick =()=>{
    // console.log("Uppercase was clicked"+text);
     let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to LowerCase","success")

   }
   const handleClearClick =()=>{
    // console.log("Uppercase was clicked"+text);
     let newText='';
     setText(newText)
     props.showAlert("Clear the all Text","success")

   }
   const handleCopy = ()=>{
    console.log("I am Copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy the text","success")
   }

   const handleExtraSpace = () => {
    let nowText = text.split(/[ ]+/);
    setText(nowText.join(" "))
    props.showAlert("Remove Extra spaces","success")
   }
  const handleOnChange =(event)=>{
    //console.log("On Change");
    setText(event.target.value)
  }
    const [text,setText]=useState('Enter text here');
    //text="new text";//Wrong way to change the state
    //setText("new text");//Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space Text</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.0008*text.split(" ").length}Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
