import GlobalStyle, { AppGrid } from "./GlobalStyle";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Main } from "./GlobalStyle";
import Helmet from "react-helmet";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppGrid>
        <Helmet>
          <title>Bookmark Manager App</title>
          <meta
            name="description"
            content="A clean and simple interface to organize your favourite websites."
          />
        </Helmet>
        <Header />
        <Main>
          <Hero />
          <Features />
          <Extensions />
          <FAQs />
          <Contact />
        </Main>
        <Footer />
      </AppGrid>
    </React.Fragment>
  );
};

export default App;
