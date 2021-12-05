import React, { useState } from "react";
import * as styled from "../../styles";
import CatalogList from "./CatalogList";

const Catalog = ({}) => {
  const [category, setCategory] = useState(false);

  return (
    <styled.Catalog.Container>
      <styled.Catalog.Title>
        <span onClick={() => setCategory(false)}>Catalog</span>
        {category && " > " + category}
      </styled.Catalog.Title>
      {!category ? (
        <>
          <styled.Catalog.CategoryBox onClick={() => setCategory("Nalichnik")}>
            Nalichnik
          </styled.Catalog.CategoryBox>
          <styled.Catalog.CategoryBox onClick={() => setCategory("Podokonnik")}>
            Podokonnik
          </styled.Catalog.CategoryBox>
          <styled.Catalog.CategoryBox onClick={() => setCategory("Pojasa")}>
            Pojasa
          </styled.Catalog.CategoryBox>
          <styled.Catalog.CategoryBox onClick={() => setCategory("Column")}>
            Column
          </styled.Catalog.CategoryBox>
        </>
      ) : (
        <>
          <CatalogList category={category} />
        </>
      )}
    </styled.Catalog.Container>
  );
};

export default Catalog;
