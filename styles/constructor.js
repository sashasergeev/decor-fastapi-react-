import styled, { keyframes } from "styled-components";

import { FiSettings } from "react-icons/fi";
import { MdBrowserNotSupported } from "react-icons/md";

const skeletLoading = keyframes`
  from{
    left: -200px;
  }
  to{
    left: 100%
  }
`;

export const SkeletElem = styled.div`
  height: ${({ height }) => height - 5 + "px"};
  width: ${({ width }) => width - 5 + "px"};
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  margin: 5px 3px;
  background: #443c68;

  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    background: #7867be45;
    border-radius: 10px;
    animation: ${skeletLoading} 2000ms ease-out infinite;
  }
`;

// main container of Constructor, where you can choose between scenes
export const ConstructorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// Container in which scene and its settings...
export const SceneContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

// Place where the scene is placed
export const SceneBox = styled.div`
  width: 100%;
  height: ${({ $size }) => ($size === "full" ? "80vh" : "40vh")};
  position: relative;
  background: gray;

  @media (max-width: 768px) {
    height: ${({ $size }) =>
      $size === "full" ? "calc(100vh - 89px - 60px)" : "40vh"};
  }
  @media (min-width: 768px) and (max-width: 1050px) {
    height: ${({ $size }) =>
      $size === "full" ? "calc(100vh - 89px  - 100px)" : "40vh"};
  }
  @media (min-width: 1050px) {
    height: 80vh;
    width: ${({ $size }) => ($size === "full" ? "calc(70vw + 400px)" : "70vw")};
  }
`;

// Place where the settings of scene are placed
export const SettingBox = styled.div`
  transition: 0.3s;
  overflow: hidden;
  background-color: #443c68;
  padding: ${(props) => (props.$hide ? "0px" : "20px")};
  color: white;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  @media (min-width: 1050px) {
    width: ${(props) => (props.$hide ? "0px" : "400px")};
  }
  @media (max-width: 1050px) {
    height: ${(props) => (props.$hide ? "0px" : "auto")};
  }
`;

export const HideBoxBtn = styled.div`
  // common
  position: absolute;
  cursor: pointer;
  border: none;
  left: 50%;
  right: 50%;
  padding: 8px 12px;
  height: fit-content;
  width: fit-content;
  transform: translate(-50%, -50%);
  transition: 0.2s;
  font-size: 16px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;

  // custom on body - pos property - border - bgcolor
  ${({ body }) => body}
  &:hover {
    background: ${({ bgHover }) => bgHover};
  }

  @media (min-width: 1050px) {
    top: 50%;
    bottom: 50%;
    border-radius: 10px;
    flex-direction: column;

    // custom on media query - pos properties
    ${({ mediaqBody }) => mediaqBody}

    & span {
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
  }
`;

export const SettingIcon = styled(FiSettings)``;

export const SettingBoxList = styled.div`
  background-color: #7867be;
  padding: 8px;
  border-radius: 8px;
  width: 250px;
  height: fit-content;
  transition: 0.2s;
`;

export const SettingTitle = styled.h3`
  text-align: center;
  cursor: pointer;
  margin: 7px;
`;

export const SizeInfo = styled.div`
  text-align: center;
`;

export const DecorSetItem = styled.div`
  padding: 8px;
  background-color: #63509d;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const DecorSetItemTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ButtonSkelet = styled.button`
  display: block;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  height: fit-content;
`;

export const Button = {
  Info: styled(ButtonSkelet)`
    background-color: #9357cc;
    color: #f0f0f0;

    &:hover {
      background-color: #622c96;
    }
  `,
  Warn: styled(ButtonSkelet)`
    background-color: #cc5784;
    color: #fff;
  `,
  Apply: styled(ButtonSkelet)`
    background-color: #8bc34aba;
    color: #fff;

    &:hover {
      background-color: #8bc34ae0;
    }
  `,
};

const onCatalogElemHover = `&:hover {background-color: #543b8c;}`;

export const Catalog = {
  Container: styled.div`
    /* margin-top: 10px; */
    background-color: #443c68;
    border-radius: 0px 0px 8px 8px;
    height: 150px;
    overflow: overlay;
  `,
  Title: styled.div`
    text-align: center;
    border-radius: 8px 8px 0px 0px;
    background: #63509d;
    padding: 5px;
    margin-top: 15px;
  `,
  CategoryBox: styled.div`
    padding: 5px 3px;

    ${onCatalogElemHover}
  `,
  CategoryItem: styled.div`
    padding: 5px 3px;
    background: ${(props) => (props.selected ? "#673ab7" : "transparent")};
    border-radius: ${(props) => (props.selected ? "5px" : "0px")};

    ${onCatalogElemHover}
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  `,
  EmptySelection: styled.div`
    height: 238px;
    margin-top: 10px;
    border: 2px dotted rgba(255, 255, 255, 0.43);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  `,
};

export const Input = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
    background: #63509d;
    > input {
      border: none;
      border-radius: 5px;
      padding: 5px;
      text-align: end;
      background: #473775;
      color: #ffffff;
      width: 55%;
    }
  `,
};

export const ConstructorMenu = {
  Container: styled.div`
    height: ${({ fullSize }) => (fullSize ? "80vh" : "")};
    width: 100vw;
    display: table-cell;
    vertical-align: middle;
  `,
  Title: styled.h2`
    text-align: center;
    color: #494257;
    margin: 0px;
    padding: 10px;
  `,
  ItemLink: styled.a`
    display: block;
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 3px;
    background: #a499d3;
    transition: 0.5s;

    &:hover {
      background: #7867be;
    }
  `,
  ItemLinkContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 5px 0px;
  `,
};

export const StyledPrice = {
  Box: styled.div`
    width: ${({ hide }) => (hide ? "0px" : "400px")};
    background-color: #5e646f;
    padding: ${({ hide }) => (hide ? "0px" : "15px")};
    transition: 0.2s;

    @media (max-width: 1050px) {
      transition: 0s;
      bottom: 0px;
      position: fixed;
      width: 100vw;
      height: ${({ hide }) => (hide ? "0px" : "295px")};
    }
    @media (min-width: 768px) and (max-width: 1050px) {
      height: ${({ hide }) =>
        hide ? "0px" : "calc(100vh - 100px - 40vh - 89px)"};
    }
    @media (max-width: 768px) {
      height: ${({ hide }) =>
        hide ? "0px" : "calc(100vh - 60px - 40vh - 89px)"};
    }
  `,
  Content: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    overflow: hidden;
    flex-wrap: wrap;
    height: 100%;

    & > div {
      padding: 5px;
      display: flex;
      justify-content: center;
      min-height: 120px;
      align-items: center;
      align-content: center;
      gap: 3px;
      flex-direction: column;
      min-width: 120px;
      background: #525061;
      border-radius: 5px;
    }
  `,
  Usage: {
    Title: styled.div`
      font-size: 21px;
    `,
    Item: {
      EmptyIcon: styled(MdBrowserNotSupported)`
        height: 30px;
        width: 30px;
      `,
      Size: styled.div`
        font-size: 19px;
      `,
    },
  },
  QuanityBtn: styled.button`
    cursor: pointer;
    padding: 5px 21px;
    border: none;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 700;
    background: none;
    color: white;
  `,
};
