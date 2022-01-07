import React, { useState } from "react";
import {
  Nav,
  Logo,
  Ul,
  Li,
  Link,
  ContactContainer,
  ContactItem,
  MenuContainer,
  BackDrop,
} from "./styles";

import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPinMapFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import Drawer from "./Drawer";
import DrawerButton from "./DrawerButton";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const triggerDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Nav>
      <ContactContainer>
        <ContactItem>
          <FaPhoneAlt />
          +7-911-756-5366
        </ContactItem>
        <ContactItem>
          <BsFillPinMapFill /> ул. Лесная д. 3в
        </ContactItem>
        <ContactItem>
          <MdEmail />
          info@decolight.com
        </ContactItem>
      </ContactContainer>
      <MenuContainer>
        <Logo>
          <Link to="/">DecoLight</Link>
        </Logo>
        <Ul>
          <Li>
            <Link to="/">Главная</Link>
          </Li>
          <Li>
            <Link to="catalog">Каталог</Link>
          </Li>
          <Li>
            <Link to="constructor">Конструктор</Link>
          </Li>
          <Li>
            <Link to="contacts">Контакты</Link>
          </Li>
        </Ul>
        <DrawerButton trigger={triggerDrawer} />
        <Drawer trigger={triggerDrawer} isOpen={isDrawerOpen} />
        {isDrawerOpen && (
          <>
            <BackDrop onClick={triggerDrawer} />
          </>
        )}
      </MenuContainer>
    </Nav>
  );
};

export default Header;
