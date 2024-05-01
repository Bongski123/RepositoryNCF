import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthWrapper } from './auth/AuthWrapper';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {SearchResult} from './components/SearchResult';
import ResultDetailPage from './components/pages/ResultPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
        
  
      </BrowserRouter>   
      <Footer/>   

   
    </div>
    
  );
}

export default App;
