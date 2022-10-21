import * as React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './component/page/HomePage/navbar'
import HomePage from './component/page/HomePage'
import CariMobil from './component/page/CariMobil'
import Detail from "./component/page/Detail";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cari-mobil" element={<CariMobil />} />
        <Route path="/cari-mobil/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
