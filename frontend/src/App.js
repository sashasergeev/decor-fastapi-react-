import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "./GlobalStyle";

import Header from "./header/Header";
import Main from "./main/Main";
import Catalog from "./catalog/Catalog";
import Constructor from "./Constructor/Constructor";
import Contact from "./contact/Contact";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/catalog/*" element={<Catalog />} />
            <Route path="/constructor/*" element={<Constructor />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
