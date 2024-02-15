import logo from "./logo.svg";
import "./App.css";
import Addtodo from "./components/addtodo";
import Todo from "./components/todo";
import Parent from "./components/Parent";
import Child from "./components/Child";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  const obj1={a:23};
  const obj2={b:2}
  const show=(a,b)=>{
    console.log(a,b);
  }
  const getdata=()=>{
    const data=obj1.concate(obj2)
    console.log(data)
         show(obj1.a,obj2.b)

  }
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/about" element={<Addtodo />} />
    //     <Route path="/next" element={<Todo />} />
    //   </Routes>
    // </BrowserRouter>
    <>
  
  <Parent>
   </Parent>

    </>
  );
}

export default App;
