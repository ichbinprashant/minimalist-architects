import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Under_const from './components/About/Under_const';
import Footer from './components/About/Footer';

function App() {
  document.body.style = 'background: rgb(34, 32, 32);';
  return (
    <div className="App">
      
      <Under_const />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
