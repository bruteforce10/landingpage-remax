import Montserratt from "@/services/FontPremier";
import Image from "next/image";
import { InfoHeader } from "./infoHeader";

const ImgHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-fit scale-105 origin-bottom">
      <div className="flex gap-4 justify-center items-end">
        <Image
          src={"/img-header.webp"}
          width={500}
          className="w-full h-auto max-w-[230px]  object-contain"
          height={100}
          alt="img-header"
          priority={true}
          quality={100}
        />
        <InfoHeader />
      </div>
      <Image
        src={"/img-header-second.webp"}
        width={500}
        className="w-full h-auto max-w-[450px]  object-contain"
        height={100}
        alt="img-header"
        priority={true}
        quality={100}
      />
    </div>
  );
};

export default ImgHeader;
