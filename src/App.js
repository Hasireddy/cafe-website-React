import { Routes, Route } from "react-router-dom";

//Components
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import Component4 from "./Components/Component4";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component1" element={<Component1 />} />
        <Route path="/component2" element={<Component2 />} />
        <Route path="/component3" element={<Component3 />} />
        <Route path="/component4" element={<Component4 />} />
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
