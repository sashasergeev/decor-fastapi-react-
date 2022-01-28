import { GlobalStyle } from "../styles/GlobalStyle";
import Header from "../modules/header/Header";
import Footer from "../modules/common/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
