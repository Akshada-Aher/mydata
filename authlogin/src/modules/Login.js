import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classname from "./layout.css";
import axios from "axios";
import "./Login.css";
function Login() {
  const [msg, setmsg] = useState("");
  console.log("message>>>>>>>>", typeof msg);
  var token1;
  (async () => {
    try {
      const cookie = document.cookie;
      const jwttoken = cookie.split("=");
      token1 = jwttoken[1];
      await axios
        .post("http://localhost:4000/api/profile", { token1 })
        .then((res) => {
          console.log("response>>>>>>>>", res);
          console.log("res<<<<<<<<<<<<", res.data.message);
          setmsg(res.data.message);
        });
    } catch (error) {}
  })();

  return (
    <>
      {msg == "Profile accessed" ? (
        <h1>login success</h1>
      ) : (
        <h1>Registration kra</h1>
      )}
      <br></br>

      <Link to="/">
        {" "}
        <button>Back</button>
      </Link>
      <Outlet />
    </>
  );
}
export default Login;

// function getdata(){
//     const [msg,setmsg]=useState("")
//     var token1;
//     (async ()=>{
//       try {
//        const cookie=document.cookie
//         const jwttoken = cookie.split('=');
//         token1=jwttoken[1]
//         await axios.post("http://localhost:4000/api/profile",{token1}).then((res)=>{
//         console.log("response>>>>>>>>",res)
//         console.log("res<<<<<<<<<<<<",res.data.message)
//              setmsg(res.data.message)

//         })

//       } catch (error) {

//       }
//      })()
//   }
