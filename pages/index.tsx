import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { isSafari } from "react-device-detect";

import Preloader from "../components/preloader/perloader.component";
import Header from "../components/header/header.component";
import Services from "../components/services/services.component";
import Gallery from "../components/gallery/gallery.component";
import Footer from "../components/footer/footer.component";
import ModalWindow from "../components/modal-window/modal-window.component";
import About from "../components/about/about.component";
import Create from "../components/create/Create";

const Home: NextPage = () => {
  const [isModalActive, setModal] = useState<boolean>(false);
  const [showPreloader, setShowPreloader] = useState<boolean>(true);
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);
  const [scrollWidth, setScrollWidth] = useState<number | null>(null);

  const calcScrollbar = (): void => {
    let div = document.createElement("div");

    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";

    // мы должны вставить элемент в документ , иначе размеры будут равны 0
    document.body.append(div);
    let value: number = div.offsetWidth - div.clientWidth;
    setScrollWidth(value);
    div.remove();
  };

  useEffect(() => {
    calcScrollbar();
    setPageLoaded(true);
    setTimeout(() => setShowPreloader(false), 2500);
    if (isSafari) {
      document.querySelector("body")?.classList.add("safari");
    }
  }, []);

  if (isModalActive) {
    document.querySelector("html")!.style.overflowY = "hidden";
    document.querySelector("body")!.style.marginRight = `${scrollWidth}px`;
  } else if (!isModalActive && pageLoaded) {
    document.querySelector("html")!.style.overflowY = "visible";
    document.querySelector("body")!.style.marginRight = "0";
  }

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="маникюр, nail, маникюр спб, маникюр мск, маникюр питер, маникюр москва, ногти, маникюр 2022, педикюр, ногти маникюр, маникюр осень, маникюр осень 2022, маникюр дизайн, дизайн ногтей, ногти 2022, ногти дизайн новинки, manicute, _manicute_"
        />
        <meta
          name="description"
          content="Студия неординарных ногтей, услуги бровиста в Москве и Санкт-Петербурге"
          key="desc"
        />
        <meta property="og:title" content="Студия _Manicute_" />
        <meta
          property="og:description"
          content="Студия неординарных ногтей, услуги бровиста в Москве и Санкт-Петербурге"
        />
        <meta property="og:image" content="img/logo.jpg" />
      </Head>
      <Header />
      <Services setModal={setModal} />
      <Gallery />
      <About />
      <br />
      <br />
      <iframe 
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a28d282c43aaba61d2107cb4a6cfd1b9c0f6113def21d0a9cb273f164553211&amp;source=constructor" 
      width="1200" 
      height="400" 
      >
      </iframe>
      {/* Новый компонент для записи */}
      <Create />
      <Footer />
      {isModalActive && <ModalWindow setModal={setModal} />}
      {showPreloader && <Preloader />}
    </>
  );
};

export default Home;
