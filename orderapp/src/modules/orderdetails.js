import PlaceOrder from "../API/placeOrder";
// import { Button,Input} from 'semantic-ui-react';
// import {useState} from "react"
// function Orderdetails(props) {
//     const [data,setData]=useState("")
//    const [firstData, setFirstdata]=useState("")
//    const [seconData, setSeconddata]=useState("")
//    console.log("firstdata>>>>>>",firstData,seconData)
//    function setValue(){
//     setFirstdata(data);
//    }
//    function setFirstData(e){
//      setValue()
//      setData("")
//       }
      
//       function setSecondData(){
        
      
//       }
    
       
      
//   return (
//     <>
//     <Input type="text" placeholder="Search..." value={data}/><br/>
//       <Button basic color='red' content='0' value="0" onClick={(e)=>setData(data+e.target.value)} />
//       <Button basic color='red' content='1' value="1" onClick={(e)=>setData(data+e.target.value)} />
//       <Button basic color='red' content='2' value="2" onClick={(e)=>setData(data+e.target.value)}/>
//       <Button basic color='red' content='3' value="3"  onClick={(e)=>setData(data+e.target.value)} /><br/>
//       <Button basic color='red' content='4'  value="4" onClick={(e)=>setData(data+e.target.value)} />
//       <Button basic color='red' content='5'  value="5"  onClick={(e)=>setData(data+e.target.value)}/>
//       <Button basic color='red' content='6'  value="6"  onClick={(e)=>setData(data+e.target.value)} />
//       <Button basic color='red' content='7'   value="7" onClick={(e)=>setData(data+e.target.value)}/><br/>
//       <Button basic color='red' content='8'   value="8" onClick={(e)=>setData(data+e.target.value)}/>
//       <Button basic color='red' content='9'   value="9" onClick={(e)=>setData(data+e.target.value)}/>
//       <Button basic color='red' content='+' value="" onClick={setFirstData}/>
//       <Button basic color='red' content='=' value="" onClick={setSecondData}/>

    

//     </>
//   );
// }
// export default Orderdetails;


import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Orderdetails(props) {
  const [input, setInput] = useState('');
  const [data, setdata]=useState(true);
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={input} disabled />
        <div className="keypad">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>/</button><br/>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>*</button><br/>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button><br/>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('=')}>=</button>
          <button onClick={() => handleClick('+')}>+</button><br/>

          <button onClick={() => handleClick('C')}>C</button>
        
        
        
        </div>

        {
        data &&
            <Link to='/createorder' >
            data
            </Link>
        
        }
      </div>
    </div>
  );
}

export default Orderdetails;

