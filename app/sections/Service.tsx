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
  bgImage = "",
  showConsult
}: ServiceProps) {

  const isPrimary = type === "primary";

  return <div className={`text-sm pt-8 px-4 mb-10 ${isPrimary ? "bg-white" : "bg-main_red text-white"}`}>
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
      <div className="flex flex-col items-end m-auto">
        <div className="flex justify-end items-center gap-2 mb-8 w-[300px]">
          <Image
            src={`/icons/contact_${isPrimary ? "red" : "white"}.png`}
            alt="QR Code"
            width={80}
            height={80}
            className="w-[50px] object-contain"
          />
          <div>
            <p className="uppercase w-[145px] text-[12px]">Fale agora com <span className="inline-block">nosso consultores</span></p>
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
            className={`w-[100px] object-contain ${isPrimary ? 'rounded border border-main_red' : ""}`}
          />
          <Link href={NUMBER_WHATSAPP} className={`text-[10px] rounded p-2 uppercase ${isPrimary ? 'bg-main_red text-white' : 'bg-white text-main_red'}`}>
            Clique e contrate agora
          </Link>
        </div>
      </div>
    )}

    {bgImage !== "" && (
      <div className="flex align-end relative w-[350px] h-[255px] mt-10 m-auto">
        <Image
          src={bgImage}
          alt="Background Image"
          width={400}
          height={300}
        />
      </div>
    )}
  </div>;
}

export default Service;
