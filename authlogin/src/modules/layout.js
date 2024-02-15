import { Outlet, Link } from "react-router-dom";
import classname from "./layout.css";
function Layout() {
  return (
    <div  style={{color: "black"}}>
      <Link to="/registration" className="button2">
        registration
      </Link>
      <Link to="/login" className="button2">
        login
      </Link>
      <Outlet />
    </div>
  );
}
export default Layout;
