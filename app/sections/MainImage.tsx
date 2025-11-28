import Image from "next/image";

function MainImage() {
  return (
    <div className="w-full flex flex-col align-center lg:w-[1200px] lg:h-[900px] lg:flex-row">
      <div className="w-full relative lg:w-1/2">
        <Image
          src="/images/main_image.png"
          alt="Imagem Principal"
          width={1200}
          height={900}
        />
      </div>
      <div className="w-[300px] m-auto text-center border-l-2 border-r-2 border-main_red">
        <p className="inline-block uppercase text-[12px] font-bold">Soluções em segurança eletrônica</p>
      </div>

      <div className="w-full flex flex-col align-center mt-20 lg:w-[1200px] lg:h-[900px] lg:flex-row">
        <div className="w-[300px] mb-10 m-auto flex flex-row items-center text-center">
          <Image
            src="/images/shield.png"
            alt="Escudo Mais Tech"
            width={80}
            height={80}
            className="max-w-[70px] m-auto"
          />
          <p className="inline-block uppercase mr-6 text-[12px] font-bold">Tranquilidade & segurança para sua vida</p>
        </div>
        <div className="w-full relative lg:w-1/2">
          <Image
            src="/images/secondary_banner.png"
            alt="Banner Secundario"
            width={1200}
            height={900}
            className="px-10 relative z-0"
          />
        </div>
      </div>
    </div>
  )
}

export default MainImage;
