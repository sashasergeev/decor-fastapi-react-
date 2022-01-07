import React from "react";

import {
  DrawerElem,
  CloseDrawerBtnElem,
  Link,
  ContactItem,
  ContactContainerDrawer,
} from "./styles";

import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPinMapFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Drawer = ({ trigger, isOpen }) => {
  return (
    <DrawerElem open={isOpen ? 1 : 0}>
      <CloseDrawerBtnElem onClick={trigger} />
      <Link onClick={trigger} to="/">
        Главная
      </Link>
      <Link to="catalog" onClick={trigger}>
        Каталог
      </Link>
      <Link to="constructor" onClick={trigger}>
        Конструктор
      </Link>
      <Link to="contacts" onClick={trigger}>
        Контакты
      </Link>

      <ContactContainerDrawer>
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
      </ContactContainerDrawer>
    </DrawerElem>
  );
};

export default Drawer;
