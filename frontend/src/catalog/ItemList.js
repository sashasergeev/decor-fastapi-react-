import React, { useState } from "react";

import { useQuery } from "react-query";
import { useParams } from "react-router";

import { fetchItems } from "../api/constructor";
import ItemModal from "./ItemModal";
import ItemParams from "./ItemParams";

import { Container, SectionTitle, Item, BackBtn, Icon } from "./styles";

const ItemList = () => {
  const { id: categoryId } = useParams();
  const { data } = useQuery([categoryId], fetchItems, {
    staleTime: Infinity,
    select: (data) => data.data,
  });

  // modal
  const [isModal, setIsModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const closeModal = () => {
    setIsModal(false);
    setSelectedId(null);
  };

  return (
    <>
      <SectionTitle>{data?.name ? data.name : "Loading..."}</SectionTitle>
      <BackBtn to="/catalog">
        <Icon.Back /> Обратно в категории
      </BackBtn>
      <Container>
        {data?.items &&
          data.items.map((e, inx) => (
            <Item.Box
              key={inx}
              onClick={() => {
                setSelectedId(inx);
                setIsModal(true);
              }}
            >
              <Item.Picture src={e.image} />
              <ItemParams elem={e} />
            </Item.Box>
          ))}
      </Container>

      <ItemModal
        isModal={isModal}
        close={closeModal}
        itemBase={selectedId ? data.items[selectedId] : null}
      />
    </>
  );
};

export default ItemList;
