import React from "react";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import {Navigation} from './navigation/Navigation'
import { InputForm } from "./InputForm/InputForm";
import { ContactPage } from "./contact";
import { Rick } from "./rick"; 


  

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route
            path="/"element={<div>Hello React!</div>
            }
          />
          <Route path="*" element={<div>404</div>} />
          <Route path="/about" element={<div>Tu powinna być strona about </div>} />
          <Route path="/form" element={<InputForm/>}  />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/rick" element={<Rick/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
