import {
  DrawerElem,
  CloseDrawerBtnElem,
  LinkS,
  ContactItem,
  ContactContainerDrawer,
  Icon,
} from "../../styles/header";

import Link from "next/link";
import { useRouter } from "next/router";

const Drawer = ({ trigger, isOpen }) => {
  const router = useRouter();
  return (
    <DrawerElem open={isOpen ? 1 : 0}>
      {isOpen && (
        <>
          <CloseDrawerBtnElem onClick={trigger} />
          <Link href="/" passHref>
            <LinkS pathName={router.pathname} onClick={trigger}>
              Главная
            </LinkS>
          </Link>
          <Link href="/catalog" passHref>
            <LinkS pathName={router.pathname} onClick={trigger}>
              Каталог
            </LinkS>
          </Link>
          <Link href="/constructor" passHref>
            <LinkS pathName={router.pathname} onClick={trigger}>
              Конструктор
            </LinkS>
          </Link>
          <Link href="/contacts" passHref>
            <LinkS pathName={router.pathname} onClick={trigger}>
              Контакты
            </LinkS>
          </Link>
          <ContactContainerDrawer>
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
          </ContactContainerDrawer>
        </>
      )}
    </DrawerElem>
  );
};

export default Drawer;
