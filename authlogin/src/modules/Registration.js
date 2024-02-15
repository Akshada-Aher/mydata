import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import classname from "./layout.css";
function Registration() {
  var token1;
  const [msg, setmsg] = useState("");
  const [token, settoken] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");

  function setdata() {
    (async () => {
      try {
        await axios
          .post("http://localhost:4000/api/auth", { username, email })
          .then((res) => {
            console.log("res<<<<<<<<<<<<", res.data.token);
            settoken(res.data.token);
            var d = new Date();
            d.setTime(d.getTime() + 5 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie = "token" + "=" + res.data.token + "; " + expires;
          });
      } catch (error) {}
    })();
  }
  return (
    <div className={classname.body}>
      <h2 className="h2">Login Page</h2>
      <br></br>
      <lable className="input">username:</lable>
      <input
        type="text"
        className="uname"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <br></br>
      <br></br> <label className="input">email:</label>
      <input
        type="text"
        className="pass"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button className="button" onClick={setdata}>
        register
      </button>
      <br></br>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h2>{msg}</h2>
      <h3>{token1}</h3>
      <Outlet />
    </div>
  );
}
export default Registration;
