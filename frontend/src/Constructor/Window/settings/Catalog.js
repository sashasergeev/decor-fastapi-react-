import axios from "axios";
import React, { useEffect, useState } from "react";
import * as styled from "../../styles";
import CatalogList from "./CatalogList";

const Catalog = ({}) => {
  const [category, setCategory] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/category/all")
      .then((res) => setCategoriesList(res.data));
  }, []);

  return (
    <styled.Catalog.Container>
      <styled.Catalog.Title>
        <span onClick={() => setCategory(false)}>Catalog</span>
        {category && " > " + category}
      </styled.Catalog.Title>
      {!category ? (
        categoriesList.map((e) => (
          <styled.Catalog.CategoryBox
            key={e.id}
            onClick={() => setCategory(e.name)}
          >
            {e.name}
          </styled.Catalog.CategoryBox>
        ))
      ) : (
        <>
          <CatalogList category={category} />
        </>
      )}
    </styled.Catalog.Container>
  );
};

export default Catalog;
