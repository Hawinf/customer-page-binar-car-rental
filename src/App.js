import * as React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import './App.css';
// import Navbar from './component/page/HomePage/navbar'
import HomePage from './component/page/HomePage'
import CariMobil from './component/page/CariMobil'
import Detail from "./component/page/Detail";
import Login from "./component/page/Login";
import Register from "./component/page/Register";
import ProtectedRoute from "./component/page/ProtectedPage";
import { EtiketPage } from "./component/page/Etiket";
import { Payment } from "./component/page/PaymentComplete";
import PaymentCustomer from "./component/page/Payment";




function App() {
  const Location = useLocation()

  

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />} >
            <Route path="/cari-mobil" element={<CariMobil />} />
            <Route path="/cari-mobil/:id" element={<Detail />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path='/payment-complete' element={<PaymentCustomer />} />
            <Route path="/payment-confirmed" element={<EtiketPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
