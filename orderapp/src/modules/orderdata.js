import { Outlet, Link } from "react-router-dom";
import OrderDatails from "./orderdetails";
import axios from "axios";
import { Button } from 'semantic-ui-react'

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function OrderData() {
   const [data1, setdata] = useState('');
console.log("data1>>>>>>>>",data1)
//   useEffect(() => {
//     // code here...
//     try {
//       axios
//         .get(
//           "http://ordersapp.a5c2bvhxdzdvcdcq.centralindia.azurecontainer.io/api/order"
//         )
//         .then((res) => {
//           setdata(res.data);
//         });
//     } catch (e) {}
//   }, []);
const data=[{
  orderId:'45',  productName:"pen",placedBy:"saturday",date:"123"
},
{
    orderId:'46',  productName:"pen",placedBy:"saturday",date:"123"
  },

]

function handleClick(id){
    console.log("id>>>>>>>",id)
    setdata(id)
}
  return (
    <>
      {data.map((d) => {
        return (
          <tr>
            <td>{d.productName}</td>
            <td>{d.placedBy}</td>
            <td>{d.date}</td>
            <td>
             <Link to={`/details/${d.orderId}`}>
             <Button class="ui button">Details</Button>
              </Link>
            </td>
          </tr>
        );
      })}
    </>
  );
}
export default OrderData;
