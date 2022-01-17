import React, { useState, useEffect, Suspense, useRef } from "react";
import Modal from "react-modal";

import PreviewItem from "../common/PreviewItem";
import { Input, Button } from "../../styles/constructor";
import { Item, Icon } from "../../styles/catalog";

import { Canvas } from "@react-three/fiber";

Modal.setAppElement("#__next");

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

const ItemModal = ({ item, close }) => {
  const [custom, setCustom] = useState();
  const height = useRef();
  const width = useRef();

  useEffect(() => {
    setCustom(item);
  }, [item?.name]);

  const apply = () => {
    const newHeight = height.current.value;
    const newWidth = width.current.value;
    setCustom({
      ...custom,
      height: newHeight,
      width: newWidth,
      price: newWidth * newHeight * 20 + 30, // !!! pseudo formula for now
    });
  };

  return custom ? (
    <Modal
      isOpen={!!item}
      onRequestClose={close}
      style={customStyles}
      contentLabel="Decor Item Modal"
    >
      <Item.Previews>
        <Item.Picture
          src={`/items/image/${custom.id}.jpg`}
          width={250}
          height={150}
        />
        <Suspense fallback={null}>
          <Canvas
            style={{ width: "300px" }}
            camera={{ position: [0.8, 0.2, 0.4], fov: 50, near: 0.01 }}
          >
            <PreviewItem item={custom} />
          </Canvas>
        </Suspense>
      </Item.Previews>
      <div style={{ width: "-webkit-fill-available" }}>
        <Item.Title>{custom.name}</Item.Title>
        <Item.DetailsBox>
          <Item.Detail>
            <Icon.Height /> {custom.height}
          </Item.Detail>
          <Item.Detail>
            <Icon.Width /> {custom.width}
          </Item.Detail>
          <Item.Detail>
            <Icon.Price /> {custom.price}
          </Item.Detail>
        </Item.DetailsBox>
      </div>
      Введите свои размеры
      <Input.Container>
        <label htmlFor="height">Высота</label>
        <input
          type="number"
          id="height"
          name="height"
          defaultValue={custom.height}
          ref={height}
        />
      </Input.Container>
      <Input.Container>
        <label htmlFor="width">Ширина</label>
        <input
          type="number"
          id="width"
          name="width"
          defaultValue={custom.width}
          ref={width}
        />
      </Input.Container>
      <Button.Apply onClick={apply}>Применить</Button.Apply>
    </Modal>
  ) : (
    <></>
  );
};

export default ItemModal;
