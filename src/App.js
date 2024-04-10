import "./App.css";
import Homepage from "../src/pages/homepage";
import Login from "../src/pages/login";
import Register from "../src/pages/registration";
import Aboutus from "../src/pages/aboutus";
import RegistrationCode from "../src/pages/registrationCode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/registercode" element={<RegistrationCode />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
