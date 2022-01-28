import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import { BsFillPinMapFill as MapIcon } from "react-icons/bs";
import { MdEmail as MailIcon } from "react-icons/md";

export const Icon = {
  Phone: styled(PhoneIcon)``,
  Map: styled(MapIcon)``,
  Mail: styled(MailIcon)``,
};

export const Nav = styled.nav`
  /* position: fixed; */
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #d8d8d8e3;
  z-index: 1000;
  box-shadow: 0px 13px 20px 0px #3e3e3e29;
  /* @media (max-width: 768px) {
    height: 60px;
  } */
`;

export const Logo = styled.a`
  font-weight: 700;
  font-size: 20px;
  border-radius: 3px;
  background: #494257;
  padding: 5px 10px;
  color: white;
  text-decoration: none;
  box-shadow: 6px 8px 14px 1px rgb(0 0 0 / 25%);
`;

export const Ul = styled.ul`
  display: flex;
  margin-right: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Li = styled.li`
  display: block;
  font-size: 15px;
  padding-right: 30px;
  font-weight: 600;
`;

export const LinkS = styled.a`
  color: #333333;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;

  &:hover {
    color: white;
    background: #cac0db;
  }
  /* Active handler */
  ${({ pathName, href }) =>
    "/" + pathName.split("/")[1] === href
      ? "color: white; background: linear-gradient(90deg, #673ab7a8 7%, rgb(53 53 66 / 66%) 80%); &:hover {background: linear-gradient(90deg, #673ab7eb 7%, rgb(53 53 66 / 86%) 80%);}"
      : "color: #333333; "}
  transition: 0.3s;
`;

export const ContactContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #e7e7e7;
  border-radius: 0px 0px 9999px 9999px;
  box-shadow: inset 0px -3px 0px 1px #b08feb;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const ContactItem = styled.div`
  color: #2f2b3b;
  font-size: 14px;
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  & > svg {
    color: #2f2b3b;
  }
`;

export const MenuContainer = styled.div`
  /* position: sticky; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`;

export const DrawerElem = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ open }) => (open ? "80vw" : "0vw")};
  height: 100vh;
  background-color: white;
  color: black;
  display: none;
  padding: ${({ open }) => (open ? "10px" : "0px")};
  z-index: 1000;
  transition: 0.5s;
  overflow-x: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    justify-content: flex-start;
  }
`;

export const DrawerBtnElem = styled(FaBars)`
  display: none;
  cursor: pointer;
  color: #7c62aa;
  width: 25px;
  height: 25px;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const CloseDrawerBtnElem = styled(AiFillCloseCircle)`
  color: #c694cf;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BackDrop = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ContactContainerDrawer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  background: #ccbde6;
  border-radius: 5px;
  padding: 5px;
`;
