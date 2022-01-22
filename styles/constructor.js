import styled from "styled-components";

import { FiSettings } from "react-icons/fi";

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
  flex-direction: column;
  width: 100%;
`;

// Place where the scene is placed
export const SceneBox = styled.div`
  width: 100%;
  height: ${(props) => (props.$hide ? "80vh" : "50vh")};
  position: relative;
  background: gray;
`;

// Place where the settings of scene are placed
export const SettingBox = styled.div`
  transition: 0.3s;
  width: 100%;
  overflow: hidden;
  background-color: #443c68;
  padding: ${(props) => (props.$hide ? "0px" : "20px")};
  height: ${(props) => (props.$hide ? "0vh" : "662px")};
  color: white;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export const SettingBoxHideBtn = styled.div`
  position: absolute;
  top: 17px;
  left: 50%;
  right: 50%;
  padding: 8px 12px;
  background: #254867;
  border-radius: 0px 0px 10px 10px;
  cursor: pointer;
  width: fit-content;
  transform: translate(-50%, -50%);
  transition: 0.5s;

  &:hover {
    background: #605688;
  }
  & div {
    display: flex;
    align-items: center;
    gap: 7px;
  }
`;
export const SettingIcon = styled(FiSettings)``;

export const SettingBoxList = styled.div`
  background-color: #7867be;
  padding: 8px;
  border-radius: 8px;
  width: 250px;
  height: fit-content;
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

export const Catalog = {
  Container: styled.div`
    /* margin-top: 10px; */
    background-color: #54368c;
    border-radius: 8px;
    max-height: 150px;
    overflow: overlay;
  `,
  Title: styled.div`
    text-align: center;
    border-radius: 8px 0px 18px 0px;
    background: #9357cc;
    padding: 5px;
    margin-top: 15px;
  `,
  CategoryBox: styled.div`
    padding: 5px 3px;
  `,
  CategoryItem: styled.div`
    padding: 5px 3px;
    background: ${(props) => (props.selected ? "#673ab7" : "transparent")};
    border-radius: ${(props) => (props.selected ? "5px" : "0px")};
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
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
