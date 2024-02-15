import axios from "axios";
import {useState} from "react"
function PlaceOrder()
{  const [data,sedata]=useState([{username:"Akshada"}])
   
    //  axios.get("http://ordersapp.a5c2bvhxdzdvcdcq.centralindia.azurecontainer.io/api/order").then((res)=>{
    //  res.json()
    //  }).then((res)=>sedata(res))
  return data;
}
export default PlaceOrder;
