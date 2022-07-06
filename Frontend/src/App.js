import React from 'react';
import './App.css';
import Header from './components/Header';
import Test from './components/Test';
import DiaryListPage from './pages/DiaryListPage';
import Diarypage from './pages/Diarypage';


import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
  


function App() {
    return (
        <Router>
            <div className="person-list">
                <div className="App">
                    <Header />
                    <Route path="/" exact component={DiaryListPage} />
                    <Route path="/diary/:id" component={Diarypage } /> 
                </div>
            </div>
        </Router>
    )
}


export default App;
