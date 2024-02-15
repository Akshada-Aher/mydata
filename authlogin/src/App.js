import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./modules/layout";
import Registration from "./modules/Registration";
import Login from "./modules/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
