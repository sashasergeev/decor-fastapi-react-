import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Door from "./Door/Door";
import Window from "./Window/Window";
import * as styled from "./styles";

const Constructor = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <styled.ConstructorMenu.Container
        fullSize={pathname === "/constructor" ? 1 : 0}
      >
        <styled.ConstructorMenu.Title>
          Выберите элемент фасада
        </styled.ConstructorMenu.Title>
        <styled.ConstructorMenu.ItemLinkContainer>
          <styled.ConstructorMenu.ItemLink to="window">
            Окно
          </styled.ConstructorMenu.ItemLink>
          <styled.ConstructorMenu.ItemLink to="door">
            Дверь
          </styled.ConstructorMenu.ItemLink>
        </styled.ConstructorMenu.ItemLinkContainer>
      </styled.ConstructorMenu.Container>

      <styled.ConstructorContainer>
        <styled.SceneContainer>
          <Routes>
            <Route path="window" element={<Window />} />
            <Route path="door" element={<Door />} />
          </Routes>
        </styled.SceneContainer>
      </styled.ConstructorContainer>
    </>
  );
};

export default Constructor;
