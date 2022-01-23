import styled from "styled-components";
import Image from "next/image";

import {
  AiOutlineColumnHeight as HeightIcon,
  AiOutlineColumnWidth as WidthIcon,
  AiOutlineRollback as BackIcon,
  AiOutlineInfoCircle as InfoIcon,
} from "react-icons/ai";
import { IoPricetagOutline as PriceIcon } from "react-icons/io5";

export const SectionTitle = styled.h1`
  margin: auto;
  width: fit-content;
  padding: 5px 15px;
  border-radius: 7px;
  margin-top: 120px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;
  margin-bottom: 20px;
`;

export const BackBtn = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 20px auto;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  border: 1px solid #9e9e9e;
  transition: 0.4s;
  cursor: pointer;
  background-color: white;
  text-decoration: none;
  color: black;
  width: fit-content;

  &:hover {
    color: white;
    background: #ff000040;
    border: 1px solid #fd4a4a;
  }
`;

export const Category = {
  Box: styled.a`
    display: block;
    max-width: 320px;
    text-align: center;
    background: #d8d8d8;
    color: black;
    text-decoration: none;
    padding: 10px;
  `,
  Title: styled.h3`
    text-align: center;
    margin: 5px;
  `,
  Description: styled.div`
    display: flex;
    gap: 7px;
    align-items: center;
    margin: 5px;
    justify-content: center;
    flex: 1;
    background: #bdbdbd;
    border-radius: 5px;

    & > div {
      padding: 5px;
      text-align: right;
      color: black;
    }
  `,
};

export const Item = {
  Box: styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background: #212229;
    padding: 10px;
    border-radius: 5px;
  `,
  Picture: styled(Image)`
    position: none;
    width: 250px;
    height: auto;
    border-radius: 5px;
  `,
  DetailsBox: styled.div`
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
  `,
  Detail: styled.div`
    display: flex;
    gap: 7px;
    align-items: center;
    margin: 5px;
    justify-content: center;
    flex: 1;
    background: #818ca1;
    padding: 5px;
    border-radius: 5px;
  `,
  Title: styled.h3`
    text-align: center;
    margin: 10px;
  `,
  Previews: styled.div`
    display: flex;
    background: white;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,
};

export const Icon = {
  Height: styled(HeightIcon)`
    height: 20px;
    width: 20px;
  `,
  Width: styled(WidthIcon)`
    height: 20px;
    width: 20px;
  `,
  Price: styled(PriceIcon)`
    height: 20px;
    width: 20px;
  `,
  Back: styled(BackIcon)`
    height: 20px;
    width: 20px;
  `,
  Info: styled(InfoIcon)`
    height: 25px;
    width: 25px;
  `,
};
