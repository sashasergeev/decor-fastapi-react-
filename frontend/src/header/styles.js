import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #ffffff;
  box-shadow: 1px 20px 15px 1px rgb(150 14 14 / 7%);
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 20px;
  border-radius: 3px;
  background: #cac0db;
  padding: 5px 10px;
`;

export const Ul = styled.ul`
  display: flex;
  margin-right: 5px;
`;
export const Li = styled.li`
  display: block;
  font-size: 15px;
  padding-right: 30px;
  font-weight: 600;
`;

export const Link = styled(NavLink)`
  color: #333333;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;
  transition: 0.5ms;
  &:hover {
    color: white;
    background: #cac0db;
  }
  &.active {
    color: white;
    background: #cac0db;
  }
`;

export const ContactContainer = styled.div`
  height: 40px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ContactItem = styled.div`
  color: #b1b4b8;
  font-size: 14px;
  flex: 1;
  text-align: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`;
