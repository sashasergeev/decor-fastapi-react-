import {
  Nav,
  Logo,
  Ul,
  Li,
  LinkS,
  ContactContainer,
  ContactItem,
  MenuContainer,
  BackDrop,
  Icon,
  DrawerBtnElem,
} from "../../styles/header";

import Drawer from "./Drawer";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const triggerDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Nav>
      <ContactContainer>
        <ContactItem>
          <Icon.Phone />
          +7-911-756-5366
        </ContactItem>
        <ContactItem>
          <Icon.Map /> ул. Лесная д. 3в
        </ContactItem>
        <ContactItem>
          <Icon.Mail />
          info@decolight.com
        </ContactItem>
      </ContactContainer>
      <MenuContainer>
        <Link href="/" passHref>
          <Logo>DecoLight</Logo>
        </Link>
        <Ul>
          <Li>
            <Link href="/" passHref>
              <LinkS pathName={router.pathname}>Главная</LinkS>
            </Link>
          </Li>
          <Li>
            <Link href="/catalog" passHref>
              <LinkS pathName={router.pathname}>Каталог</LinkS>
            </Link>
          </Li>
          <Li>
            <Link href="/constructor" passHref>
              <LinkS pathName={router.pathname}>Конструктор</LinkS>
            </Link>
          </Li>
          <Li>
            <Link href="/contacts" passHref>
              <LinkS pathName={router.pathname}>Контакты</LinkS>
            </Link>
          </Li>
        </Ul>

        <DrawerBtnElem onClick={triggerDrawer} />
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
