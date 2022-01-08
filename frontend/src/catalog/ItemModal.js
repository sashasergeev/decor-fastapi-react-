import React, { useState, useEffect, Suspense, useRef } from "react";

import Modal from "react-modal";

import { Item } from "./styles";

import PreviewItem from "../Constructor/Catalog/PreviewItem";
import { Input, Button } from "../Constructor/styles";
import ItemParams from "./ItemParams";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#494257",
  },
};

const ItemModal = ({ isModal, close, itemBase }) => {
  const [item, setItem] = useState("");

  const height = useRef();
  const width = useRef();

  useEffect(() => {
    if (itemBase) {
      setItem(itemBase);
    }
  }, [itemBase]);

  const apply = () => {
    const newHeight = height.current.value;
    const newWidth = width.current.value;
    setItem({
      ...item,
      height: newHeight,
      width: newWidth,
      price: newWidth * newHeight * 20 + 30, // !!! pseudo formula for now
    });
  };

  return itemBase ? (
    <>
      <Modal
        isOpen={isModal}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Decor Item Modal"
      >
        <Item.Previews>
          <Item.Picture src={item.image} />
          <Suspense fallback={null}>
            <PreviewItem item={item} />
          </Suspense>
        </Item.Previews>
        <ItemParams elem={item} />
        Введите свои размеры
        <Input.Container>
          <label htmlFor="height">Высота</label>
          <input
            type="number"
            id="height"
            name="height"
            defaultValue={item.height}
            ref={height}
          />
        </Input.Container>
        <Input.Container>
          <label htmlFor="width">Ширина</label>
          <input
            type="number"
            id="width"
            name="width"
            defaultValue={item.width}
            ref={width}
          />
        </Input.Container>
        <Button.Apply onClick={apply}>Применить</Button.Apply>
      </Modal>
    </>
  ) : (
    <></>
  );
};

export default ItemModal;
