import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

import * as styled from "../../../styles/constructor";
import CatalogList from "./CatalogList";

const Catalog = () => {
  // redux
  const dispatch = useDispatch();
  const ac = bindActionCreators(actionCreators, dispatch);
  const { chosenCategory: category, categories: categoriesList } = useSelector(
    ({ catalog }) => catalog
  );

  useEffect(() => ac.fetchCategories(), []);

  return (
    <>
      <styled.Catalog.Title>
        <span
          onClick={() => {
            ac.setCatalog("chosenCategory", false);
            ac.setCatalog("items", []);
          }}
        >
          Catalog
        </span>
        {category && " > " + category.name}
      </styled.Catalog.Title>

      {!category ? (
        <styled.Catalog.Container>
          {categoriesList &&
            categoriesList.map((e) => (
              <styled.Catalog.CategoryBox
                key={e.id}
                onClick={() =>
                  ac.setCatalog("chosenCategory", { id: e.id, name: e.name })
                }
              >
                {e.name}
              </styled.Catalog.CategoryBox>
            ))}
        </styled.Catalog.Container>
      ) : (
        <>
          <CatalogList />
        </>
      )}
    </>
  );
};

export default Catalog;
