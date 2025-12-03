import Image from "next/image";

function MainImage() {
  return (
    <div className="w-full flex flex-col align-center md:max-w-[1000px] md:m-auto">
      <div className="w-full relative">
        <Image
          src="/images/main_image.png"
          alt="Imagem Principal"
          width={1200}
          height={900}
        />
      </div>
      <div className="w-[300px] m-auto text-center border-l-2 border-r-2 border-main_red md:w-[600px]">
        <p className="inline-block uppercase text-[12px] font-bold md:text-xl">Soluções em segurança eletrônica</p>
      </div>

      <div className="w-full flex flex-col align-center mt-20">
        <div className="w-[300px] mb-10 m-auto flex flex-row items-center text-center md:w-[600px]">
          <Image
            src="/images/shield.png"
            alt="Escudo Mais Tech"
            width={80}
            height={80}
            className="max-w-[70px] m-auto"
          />
          <p className="inline-block uppercase mr-6 text-[12px] font-bold md:text-xl">Tranquilidade & segurança para sua vida</p>
        </div>
          <div className="w-full max-w-[900px] relative">
            <picture>
              <source
                srcSet="/images/secondary-banner.png"
                media="(max-width: 900px)"
              />
              <Image
                src="/images/secondary-banner-desktop.png"
                alt="Banner"
                width={1200}
                height={900}
                className="w-full"
              />
            </picture>
          </div>
      </div>
    </div>
  )
}

export default MainImage;
