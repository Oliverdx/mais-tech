'use client'

import BotButton from "./components/BotButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import MainImage from "./sections/MainImage";
import Service from "./sections/Service";
import Services from "./servicesList";

export default function Home() {

  return (
    <div>
      <Header />
      <main>
        <MainImage />
        <About />
        {Services.map((serviceItem, index) => 
          <Service key={index} {...serviceItem}/>
        )}
        <BotButton />
      </main>
      <Footer />
    </div>
  );
}
