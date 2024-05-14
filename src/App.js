import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";

function App() {
  const containerRef = useRef(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basically, you would want to watch page/location changes
              //  For example, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criteria if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{loader ? null : <Loader />}</AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrival />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
