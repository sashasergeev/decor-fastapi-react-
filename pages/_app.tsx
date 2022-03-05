import { GlobalStyle } from "../styles/GlobalStyle";
import Header from "../modules/header/Header";
import Footer from "../modules/common/Footer";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
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
