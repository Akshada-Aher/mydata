import OrderData from "./orderdata";
import "./orderList.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
function OrderList() {
  return (
    <>
      <Link to="/createorder">
        <Button class="ui button">Create Order</Button>
      </Link>

      <table>
        <thead>
          {" "}
          <tr>
            <th>Ordername</th>
            <th>PlacedBy</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <OrderData />
        </tbody>
      </table>
    </>
  );
}
export default OrderList;
