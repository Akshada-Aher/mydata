import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./orderdetails.css";
function CreateOrder() {
  const [productName, setProductName] = useState("");
  const [inputError, setInputError] = useState(null);
  const [amount, setAmount] = useState(0);
  const [placedBy, setPlacedBy] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [pinCode, setPinCode] = useState(0);

  function handleSubmit(event) {
    (async () => {
      try {
        await axios
          .get(
            "http://ordersapp.a5c2bvhxdzdvcdcq.centralindia.azurecontainer.io/api/order"
          )
          .then((res) => {
            alert("data submitted successfully", res);
            console.log(res);
          });
      } catch (error) {}
    })();
    event.preventDefault();
    console.log(
      productName,
      amount,
      placedBy,
      addressLine1,
      addressLine2,
      pinCode
    );
    if (productName.length >= 5) {
      // submit form
    } else {
      setInputError("Input must be at least 5 characters");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Order Details</h1>
      <label>
        ProductName:
        <input
          className="input"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        Amount:
        <input
          className="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        PlacedBy:
        <input
          className="input"
          type="text"
          value={placedBy}
          onChange={(e) => setPlacedBy(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        AddressLine1:
        <input
          className="input"
          type="textArea"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        AddressLine2:
        <input
          className="input"
          type="textArea"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        PinCode:
        <input
          className="input"
          type="text"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />
      </label>
      {inputError && <div style={{ color: "red" }}>{inputError}</div>}
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
export default CreateOrder;
