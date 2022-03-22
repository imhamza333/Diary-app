import React from 'react';
import './App.css';
import Header from './components/Header';
import DiaryListPage from './pages/DiaryListPage';
import Diarypage from './pages/Diarypage';


import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<DiaryListPage/>} />
                <Route path="/diary/:id" element={<Diarypage />} /> 
            </Routes>
        </BrowserRouter>
    )
}


export default App;
