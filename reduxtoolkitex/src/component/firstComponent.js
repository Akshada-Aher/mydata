import { useDispatch, useSelector } from "react-redux";
import { storedata } from "../features/slice";
import {axios} from "axios"
const FirstComp = () => {
  const dispatch = useDispatch();
  const  userinfo= [{ username: "Akshada", pass: "1234" },{username:"Aniket",pass:"mota"}];

  const handlechange = () => {
    console.log("handlechange>>>>>>>>>>>") 
   
    dispatch(storedata({userinfo}));
  };
  const result=useSelector((state)=>state.Apidata.data)
console.log("result>>>>>",result)
  return (
    <>
      <button onClick={handlechange}>click</button>
      
    </>
  );
};
export default FirstComp;
