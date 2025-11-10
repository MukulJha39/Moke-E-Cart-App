import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-8">
            <Products />
          </div>
          <div className="col-lg-4">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
