import React from "react";
import CategoryList from "./CategoryList";
import ItemList from "./ItemList";
import { Route, Routes } from "react-router-dom";

const Catalog = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CategoryList />} />
        <Route exact path="/category/:id" element={<ItemList />} />
      </Routes>
    </>
  );
};

export default Catalog;
