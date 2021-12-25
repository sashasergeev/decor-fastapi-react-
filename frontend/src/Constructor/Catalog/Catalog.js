import axios from "axios";
import React, { useEffect, useState } from "react";
import * as styled from "../styles";
import CatalogList from "./CatalogList";

const Catalog = ({ usage, applies, changeElement }) => {
  const [category, setCategory] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const url = `http://127.0.0.1:8000/category/usage?applies=${applies.toLowerCase()}&usage=${usage}`;

    axios.get(url).then((res) => setCategoriesList(res.data));
  }, [usage, applies]);

  return (
    <>
      <styled.Catalog.Title>
        <span onClick={() => setCategory(false)}>Catalog</span>
        {category && " > " + category.name}
      </styled.Catalog.Title>

      {!category ? (
        <styled.Catalog.Container>
          {categoriesList.map((e) => (
            <styled.Catalog.CategoryBox
              key={e.id}
              onClick={() => setCategory({ id: e.id, name: e.name })}
            >
              {e.name}
            </styled.Catalog.CategoryBox>
          ))}
        </styled.Catalog.Container>
      ) : (
        <>
          <CatalogList
            usage={usage}
            changeElement={changeElement}
            category={category}
          />
        </>
      )}
    </>
  );
};

export default Catalog;
