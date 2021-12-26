import React from "react";

import Constructor from "./Constructor/Constructor";
import GlobalStyle from "./GlobalStyle";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
          <Route exact path="/" element={null} />
          <Route path="/constructor/*" element={<Constructor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
