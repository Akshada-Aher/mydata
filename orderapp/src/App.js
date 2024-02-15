import logo from './logo.svg';
import './App.css';
import CreateOrder from './modules/createOrder';
import OrderList from './modules/orderList';
import OrderData from './modules/orderdata';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orderdetails from './modules/orderdetails';
import PlaceOrder from './API/placeOrder';
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<OrderList/>}/>
        <Route path="/details/:id" exact element={<Orderdetails 
        />} />
        <Route path='/createorder' element={<CreateOrder/>}/>
      </Routes>
   </>
  );
}

export default App;
