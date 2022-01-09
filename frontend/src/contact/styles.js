import styled from "styled-components";
import { Icon as Icons } from "../header/styles";

import { MdDoneOutline as DoneIcon } from "react-icons/md";

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  background-color: #453b67;
  height: calc(100vh - 100px);
  @media (max-width: 768px) {
    width: 100vw;
    height: fit-content;
  }
`;

export const ContentBox = styled.div`
  width: 75vw;
  display: flex;
  margin: 0 auto;
  padding: 20px;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 768px) {
    width: 95vw;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  padding: 30px 0 5px 0;
  font-size: 22px;
`;

export const Text = styled.div`
  font-size: 17px;
  color: white;
  flex: 1;
  margin-bottom: 10px;
`;

const IconSkelet =
  "height: 35px;width: 35px;background: #cac0db;padding: 5px;border-radius: 50%;";

export const Icon = {
  Phone: styled(Icons.Phone)`
    ${IconSkelet}
  `,
  Map: styled(Icons.Map)`
    ${IconSkelet}
  `,
  Mail: styled(Icons.Mail)`
    ${IconSkelet}
  `,
  Done: styled(DoneIcon)`
    ${IconSkelet}
    background-color: #aaff48;
  `,
};

export const ContactElem = {
  Item: styled.div`
    color: white;
    padding: 5px;
    font-size: 19px;
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
  `,
  Box: styled.div`
    flex: 1;
    padding: 20px;
  `,
};

const FieldSkelet = `
  padding: 9px;
  border: 1px solid #cac0db;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    outline: 1px solid #453b67;
  }
  &:focus-visible {
    border-color: #453b67;
    outline: 1px solid #453b67;
  }
`;

export const FormElem = {
  Container: styled.div`
    flex: 1;
    background: white;
    border-radius: 10px;
    padding: 20px;
    color: #453b67;
  `,
  Title: styled.h2`
    margin: 5px;
    text-align: center;
  `,
  Text: styled.p`
    text-align: center;
    padding: 0 5px 10px 5px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Input: styled.input`
    ${FieldSkelet}
  `,
  TextArea: styled.textarea`
    ${FieldSkelet}
    resize: vertical;
  `,
  SumbitBtn: styled.input`
    transition: 0.3s;
    cursor: pointer;
    border: 1px solid #cac0db;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #453b67;
    &:hover {
      background-color: #cac0db;
      color: white;
    }
  `,
  Success: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    background: #d3d3d3;
    border-radius: 9999px;
  `,
};
