import { GlobalStyle } from "../styles/GlobalStyle";
import Header from "../modules/header/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
