import styled from "styled-components";
import Link from "next/link";

const FooterElem = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #939eb4;
  font-weight: 600;

  & a {
    color: #939eb4;
    text-decoration: none;
    padding-left: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterElem>
      <div>© 2022, Деколайт. Все права защищены.</div>
      <div>
        <Link href="/" passHref>
          <a>Главная</a>
        </Link>
        <Link href="/catalog" passHref>
          <a>Каталог</a>
        </Link>
        <Link href="/constructor" passHref>
          <a>Конструктор</a>
        </Link>
        <Link href="/contacts" passHref>
          <a>Контакты</a>
        </Link>
      </div>
    </FooterElem>
  );
};

export default Footer;
