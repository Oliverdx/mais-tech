import Image from "next/image";

function About(){
  return (
    <div className="mt-[-100px] relative z-2 p-8 md:max-w-[1000px] md:m-auto">
      <Image
        src="/images/logo.png"
        alt="Logo Mais Tech"
        width={300}
        height={200}
        className="z-2"
      />
      <p className="mt-4 leading-8 md:max-w-[550px]">
        A <b className="uppercase">Mais Tech</b> é uma empresa do <b className="uppercase">Grupo mais gestão e Serviços</b> especializada na utilização dos avanços tecnológicos para promoção da segurança eletrônica visando a proteção das pessoas e empresas nos mais diferentes ambientes.  
      </p>

      <Image
        src="/images/about-image.png"
        alt="About Image"
        width={700}
        height={1000}
        className=""
      />
    </div>
  );
}

export default About;
