import './App.css';

// ======== Bootstrap Import Cdn ======

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './Components/Common/Header';

// ======== Routes , Browserouter ======

import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Header/>
        <Routes>
          {/* <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" exact element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
