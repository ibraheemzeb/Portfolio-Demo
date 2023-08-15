import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Project from "./routes/Project";
import Pricing from "./routes/Pricing";
import ContactData from "./routes/ContactData";
import Register from "./routes/Register";
import Login from "./routes/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contactdata" element={<ContactData />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
