import React from "react";
import {
  Nav,
  Logo,
  Ul,
  Li,
  Link,
  ContactContainer,
  ContactItem,
  MenuContainer,
} from "./styles";

const Header = () => {
  return (
    <Nav>
      <ContactContainer>
        <ContactItem>Номер: +7-911-756-5366</ContactItem>
        <ContactItem>Адрес: ул. Лесная д.3в</ContactItem>
        <ContactItem>info@decolight.com</ContactItem>
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
      </MenuContainer>
    </Nav>
  );
};

export default Header;
