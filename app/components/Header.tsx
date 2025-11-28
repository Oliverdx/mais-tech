import Link from "next/link";
import { NUMBER_WHATSAPP } from "../constants";
import Image from "next/image";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return <header className="flex items-center h-20 w-full bg-header_bg">
    <div className="flex w-5/6 h-20 items-center justify-between m-auto lg:w-[1000px] ">

      <HamburgerMenu isOpen={showMenu} openMenu={setShowMenu} />

      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo Mais Tech"
          width={150}
          height={50}
        />
      </Link>
      <button
        onClick={() => location.href = NUMBER_WHATSAPP}
        className="cursor-pointer p-2 ounded border-light_gray text-sm text-dark_gray hover:bg-light_gray
          md:border-2 md:px-5 md:py-3">
          <Image
            src="/images/whatsapp.png"
            alt="whatsApp"
            width={50}
            height={50}
            className="w-[25px] h-[25px] inline-block md:mr-2"
          />
        <span className="hidden">CONTRATE AGORA</span>
      </button>
    </div>
  </header>;
}

export default Header;
