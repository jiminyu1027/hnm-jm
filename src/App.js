import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import PrivateRoute from "./page/route/PrivateRoute";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
