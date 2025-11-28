import Image from "next/image";
import Link from "next/link";
import { NUMBER_WHATSAPP, PHONE_NUMBER } from "../constants";

export interface service {
  icon: string;
  title: string;
}

export interface ServiceProps {
  type: "primary" | "secondary";
  title: string;
  breafing: string;
  description: string;
  serviceList: service[];
  bgImage?: string;
  showConsult?: boolean;
}

function Service({
  type,
  title,
  breafing,
  description,
  serviceList,
  bgImage,
  showConsult
}: ServiceProps) {

  const isPrimary = type === "primary";

  return <div className={`text-sm p-8 ${isPrimary ? "bg-white" : "bg-main_red text-white"}`}>
    <div className="w-full">
      <h2 className="text-lg uppercase font-bold">{title}</h2>

      <p className={`pb-5 mb-5 border-b border-${isPrimary ? 'main_red' : 'white'}`}>
        {breafing}
      </p>

      <p>{description}</p>

      {serviceList.map((service, index) => (
        <div key={index} className={`pb-2 flex items-center gap-4 my-4 border-b border-${isPrimary ? 'light_gray' : 'white'}`}>
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
    </div>

    {showConsult && (
      <div className="flex flex-col items-center m-auto">
        <div className="flex items-center gap-2 mb-8 w-[300px]">
          <Image
            src={`/icons/contact_${isPrimary ? "red" : "white"}.png`}
            alt="QR Code"
            width={80}
            height={80}
            className="w-[50px] object-contain"
          />
          <div>
            <p className="uppercase text-[12px]">Fale agora com <span className="inline-block">nosso consultores</span></p>
            <Link href={PHONE_NUMBER} className={`uppercase font-bold text-xl ${isPrimary ? 'text-main_red' : 'text-white'}`}>
                {PHONE_NUMBER.replace("tel:", "")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-[160px]">
          <Image
            src="/images/qr_code.png"
            alt="QR Code"
            width={200}
            height={200}
            className="w-[100px] object-contain"
          />
          <Link href={NUMBER_WHATSAPP} className={`text-[10px] rounded p-2 uppercase ${isPrimary ? 'bg-main_red text-white' : 'bg-white text-main_red'}`}>
            Clique e contrate agora
          </Link>
        </div>
      </div>
    )}

    {bgImage && (
      <div className="absolute top-0 right-0 opacity-10 w-1/2 h-full overflow-hidden">
        <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    )}
  </div>;
}

export default Service;
