import React, { useState, useEffect, Suspense, useRef } from "react";
import Modal from "react-modal";

import PreviewItem from "../common/PreviewItem";
import { Input, Button } from "../../styles/constructor";
import { Item, Icon } from "../../styles/catalog";

import { Canvas } from "@react-three/fiber";
import DecorItemInterface from "../../api/DecorItemInterface";

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

interface ItemModalInterface {
  item?: DecorItemInterface;
  close: () => void
}

const ItemModal = ({ item, close } : ItemModalInterface) => {
  const [custom, setCustom] = useState<DecorItemInterface | undefined>();
  const height = useRef<HTMLInputElement>(null);
  const width = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCustom(item);
  }, [item]);

  const apply = () => {
    const newHeight: number = +(height.current?.value ?? 0);
    const newWidth: number = +(width.current?.value ?? 0);
    setCustom(custom && {
      ...custom,
      height: newHeight,
      width: newWidth,
      price: newWidth && newHeight ? newWidth * newHeight * 20 + 30 : 0, // !!! pseudo formula for now
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
