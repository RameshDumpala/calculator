import React,{useState} from 'react'
import "./calculator.css"
import Keypad from './Keypad'


const Calculator = () => {
const [input,setInput]=useState("")

    const handlechange=(value)=>{
        setInput(input+value)
    }
    const handleclear=()=>{
        setInput('') 
    }
    const calculator=()=>{
        let invalue= eval(input)
        setInput(invalue)
    }
    const backbutton=()=>{
   setInput(input.slice(0,input.length -1))
    }
   
  return (
    <div>
        <input type="text" className='input' value={input}   onChange={handlechange}/>
       <Keypad  handlechange={handlechange}  handleclear={handleclear} calculator={calculator}  backbutton={backbutton}/>
    </div>
  )
}

export default Calculator