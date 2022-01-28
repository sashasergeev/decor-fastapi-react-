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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #ffffff;
  z-index: 1000;
  @media (max-width: 768px) {
    height: 60px;
  }
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
  transition: 0.3s;

  &:hover {
    color: white;
    background: #cac0db;
  }
  /* Active handler */
  ${({ pathName, href }) =>
    "/" + pathName.split("/")[1] === href
      ? "color: white; background: #cac0db;"
      : "color: #333333; "}
`;

export const ContactContainer = styled.div`
  height: 40px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const ContactItem = styled.div`
  color: #494257b0;
  font-size: 14px;
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  & > svg {
    color: #494257d1;
  }
`;

export const MenuContainer = styled.div`
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
    justify-content: space-evenly;
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
  gap: 10px;
`;
