import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from "./Components/Home";
import SearchMedicine from './Components/MedicineComp/functions/searchMedicine';
// import RemoveMedicine from "./components/MedicineComp/functions/removeMedicine";
import Top_bar from './topbar';
// import MyPage from "./components/MyPage/MyPage";
import TakeMedicine from './Components/MedicineComp/takeMedicine';
import CheckCurrentProgress from './Components/MedicineComp/checkCurrentProgress';
import MyPage from './Components/MyPageComp/MyPage';

function App() {
  return (
    <div className="all-pages">
      <Router>
        <Top_bar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<CheckCurrentProgress />} />
          <Route path="/med/mypage" element={<TakeMedicine />} />
          <Route path="/med/add" element={<SearchMedicine />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
