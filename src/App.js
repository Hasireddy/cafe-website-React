import { Routes, Route } from "react-router-dom";

//Components
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Employees from "./Components/Employees";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/* 
1. Import react-router-dom (npm i react-router-dom)
2.Change the name of your component 
  -App.js - Change the import statement, the route name ("to="/component1"") and the elemenet (<Component-1 />)
*/
