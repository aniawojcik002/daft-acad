// import logo from './logo.svg';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import logo from './ReactIcon.png';

import { InputForm } from "./InputForm/InputForm";
import { ContactPage } from "./contact";

  

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <div>
            <img style={{height:'1rem'}}src={logo} alt="logo biblioteki React"></img>
          </div>
          <div>
            <Link className="App-link" to={"/"}> Home </Link>
            <Link className="App-link" to={"/About"}> About </Link>
            <Link className="App-link" to={"/form"}> Form </Link>
            <Link className="App-link" to={"/Contact"}> Contact</Link>
          </div>
        </div>
        <Routes>
          <Route
            path="/"element={<div>Hello React!</div>
            }
          />
          <Route path="*" element={<div>404</div>} />
          <Route path="/about" element={<div>Tu powinna być strona about </div>} />
          <Route path="/form" element={<InputForm/>}  />
          <Route path="/contact"element={<ContactPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
