import React, { useState } from "react";
import CatalogList from "./CatalogList";

const Catalog = ({}) => {
  const [category, setCategory] = useState(false);

  return (
    <div className="decorSetCatalog">
      <div className="decorSetTitle">
        <span onClick={() => setCategory(false)}>Catalog</span>
        {category && " > " + category}
      </div>
      {!category ? (
        <>
          <div
            className="catalogCategory"
            onClick={() => setCategory("Nalichnik")}
          >
            Nalichnik
          </div>
          <div
            className="catalogCategory"
            onClick={() => setCategory("Podokonnik")}
          >
            Podokonnik
          </div>
          <div
            className="catalogCategory"
            onClick={() => setCategory("Pojasa")}
          >
            Pojasa
          </div>
          <div
            className="catalogCategory"
            onClick={() => setCategory("Column")}
          >
            Column
          </div>
        </>
      ) : (
        <>
          <CatalogList category={category} />
        </>
      )}
    </div>
  );
};

export default Catalog;
