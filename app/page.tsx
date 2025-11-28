'use client'

import Header from "./components/Header";
import About from "./sections/About";
import MainImage from "./sections/MainImage";
import Service from "./sections/Service";
import Services from "./servicesList";

export default function Home() {

  return (
    <div className="">
      <Header />
      <main className="">
        <MainImage />
        <About />
        {Services.map((serviceItem, index) => 
          <Service key={index} {...serviceItem}/>
        )}
      </main>
    </div>
  );
}
