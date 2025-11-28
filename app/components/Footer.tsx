import Image from "next/image";
import Link from "next/link";
import {
  PHONE_NUMBER,
  NUMBER_WHATSAPP,
  INSTAGRAM,
  LOCATION,
  LOCATION_URL
 }
 from "../constants";

function Footer() {
  return <footer className="bg-main_red w-full py-10 mt-10">
    <div className="flex flex-col justify-center w-11/12 m-auto justify-center text-white md:flex-row align-center md:items-center">
      <Image
        src="/images/logo-white.png"
        alt="Mais Tech Logo White"
        width={300}
        height={80}
        className="w-[250px] m-auto mb-10 md:border-r-1 md:border-white md:pr-8 md:m-0 md:mr-8 md:h-17"
      />

      <div className="flex flex-col items-center gap-8 md:flex-row">
        <Image
          src="/images/qr_code.png"
          alt="QR Code"
          width={200}
          height={200}
          className="w-[100px] object-contain"
        />
        <div className="flex flex-col w-[280px] text-[14px]">
          <Link href={NUMBER_WHATSAPP}></Link>
          <Link href={LOCATION_URL}>{LOCATION}</Link>
          <Link href={`https://instagram.com/${INSTAGRAM}`}>{INSTAGRAM}</Link>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;
