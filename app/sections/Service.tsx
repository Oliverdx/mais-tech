import Image from "next/image";
import Link from "next/link";
import { NUMBER_WHATSAPP, PHONE_NUMBER } from "../constants";

export interface service {
  icon: string;
  title: string;
}

export interface ServiceProps {
  serviceId: "portaria" | "video-monitoramento" | "alarme";
  type: "primary" | "secondary";
  title: string;
  breafing: string;
  description: string;
  serviceList: service[];
  bgImage?: string;
  showConsult?: boolean;
  showBadge?: boolean;
}

function Service({
  serviceId,
  type,
  title,
  breafing,
  description,
  serviceList,
  bgImage = "",
  showConsult,
  showBadge = false,
}: ServiceProps) {

  const isPrimary = type === "primary";
  const badgeBgColor = isPrimary ? "bg-[#B6B6B6]" : "bg-[#B3272D]";

  return <div id={serviceId} className={`relative text-sm ${showBadge ? "pt-44" : "pt-10"} px-4 ${isPrimary ? "bg-white" : "bg-main_red text-white"}`}>
    <div className="md:max-w-[1000px] md:m-auto">

      {showBadge && <div className="absolute top-0 right-0 mt-4 mr-4 flex gap-4">
        <div className={`absolute top-[-16px] right-[24px] h-10 w-10 ${badgeBgColor}`}></div>
        <div className="absolute top-[20px] right-[0px] flex flex-col w-22 gap-2 py-3 items-center bg-white rounded-xl border border-main_red">
          <Image
            src="/icons/metodologia_white.png"
            alt="Metodologia Mais Tech de Riscos"
            width={50}
            height={50}
            className="w-[40px] h-full object-contain z-2"
          />

          <span className="font-bold text-center uppercase text-dark_gray text-[10px] w-20">Metodologia Mais Tech em Segurança</span>
        </div>
      </div>}

      <div className="w-full">
        <h2 className="text-lg uppercase font-bold">{title}</h2>

        <p className={`pb-5 mb-5 border-b border-${isPrimary ? 'main_red' : 'white'}`}>
          {breafing}
        </p>

        <p>{description}</p>

        {serviceList.map((service, index) => (
          <div key={index} className={`pb-2 flex items-center gap-4 ${index !== serviceList.length - 1 && `my-4 border-b border-${isPrimary ? 'light_gray' : 'white'}`}`}>
            <div className="w-[30px] h-[30px]">
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
                className="w-[30px] h-full object-contain"
              />
            </div>
            <h3 className="text-[12px] uppercase">{service.title}</h3>
          </div>
        ))}
        <div className="pb-2 flex items-center mt-2 mb-4">
          <Image
            src="/icons/metodologia_white.png"
            alt="Metodologia Mais Tech de Riscos"
            width={50}
            height={50}
            className="w-[35px] h-full object-contain z-2"
          />
          <h3 className={`text-[12px] uppercase font-bold h-[35px] flex items-center px-10 w-[300px] m-[-17px] bg-${isPrimary ? 'main_red' : 'white'}`} style={{ color: isPrimary ? 'white' : 'var(--main-red)' }}>Metodologia Mais Tech de Riscos</h3>
        </div>
      </div>

      {showConsult && (
        <div className="flex flex-col items-center m-auto md:items-end">
          <div className="flex justify-center items-center gap-2 mb-8 w-[300px]">
            <Image
              src={`/icons/contact_${isPrimary ? "red" : "white"}.png`}
              alt="QR Code"
              width={80}
              height={80}
              className="w-[50px] object-contain"
            />
            <div>
              <p className="uppercase w-[145px] text-[12px]">Fale agora com <span className="inline-block">nosso consultores</span></p>
              <Link href={NUMBER_WHATSAPP} className={`uppercase font-bold text-xl ${isPrimary ? 'text-main_red' : 'text-white'}`}>
                {PHONE_NUMBER}
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-[160px]">
            <Image
              src="/images/qr_code.png"
              alt="QR Code"
              width={200}
              height={200}
              className={`w-[100px] object-contain ${isPrimary ? 'rounded border border-main_red' : ""}`}
            />
            <Link href={NUMBER_WHATSAPP} className={`text-[10px] rounded p-2 uppercase ${isPrimary ? 'bg-main_red text-white' : 'bg-white text-main_red'}`}>
              Clique e contrate agora
            </Link>
          </div>
        </div>
      )}

      {bgImage !== "" && (
        <div className="flex align-end relative w-[350px] h-[255px] mt-10 m-auto md:w-[700px] md:h-[530px] md:mt-[-30px]">
          <Image
            src={bgImage}
            alt="Background Image"
            width={700}
            height={400}
            className="md:object-contain md:w-full md:h-full"
          />
        </div>
      )}
    </div>
  </div>;
}

export default Service;
