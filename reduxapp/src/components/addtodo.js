// import {useState} from "react";
// import {useDispatch} from 'react-redux'
// import { addtodo } from "../features/todo/todoSlice";
// import { useSelector } from "react-redux";

// function Addtodo(){
//     const [input, setInput]=useState("")
//     const result=useSelector((state)=>state.counter.result);
//     const dispatch=useDispatch()
//     function adddata(){
//       dispatch(addtodo(input))
//     }
   
//     return(
//     <>
//     <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)}>

//     </input>
//     <button onClick={adddata}>
//         Add todo:
//     </button>
//   <h1>{result}</h1>
//     </>
//     )
// }
// export default Addtodo;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add ,sub} from '../features/counterslice';
import {Link} from 'react-router-dom'
function Addtodo(){
const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const result = useSelector((state) => state.counter.Addresult);
const result1= useSelector((state)=>state.counter.Subresult)
const dispatch = useDispatch();

const handleAddition = () => {
  dispatch(add({ num1, num2 }));
};
const handleSubstraction=()=>{
    dispatch(sub({num1,num2}))
}

return (
  <div>
    <input type="text" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
    <input type="text" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
    <button onClick={handleAddition}>Add</button>
    <button onClick={handleSubstraction}>sub</button>
    <div>Result: {result}</div>
    <div>Result1:{result1}</div>
    <Link to='/next'>Next page</Link>
  </div>
);}
export default Addtodo;