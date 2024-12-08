import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import SearchMedicine from "./Components/MedicineComp/functions/searchMedicine";
// import RemoveMedicine from "./components/MedicineComp/functions/removeMedicine";
import Top_bar from "./topbar";
// import MyPage from "./components/MyPage/MyPage";
import TakeMedicine from "./Components/MedicineComp/takeMedicine";

function App() {
  return (
    <Router>
      <Top_bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/med/mypage" element={<TakeMedicine />} />
        <Route path="/med/add" element={<SearchMedicine />} />
      </Routes>
    </Router>
  );
}

export default App;
