import React from "react";

import Constructor from "./Constructor/Constructor";
import GlobalStyle from "./GlobalStyle";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Catalog from "./catalog/Catalog";
import { QueryClient, QueryClientProvider } from "react-query";

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
            <Route exact path="/" element={null} />
            <Route path="/catalog/*" element={<Catalog />} />
            <Route path="/constructor/*" element={<Constructor />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
