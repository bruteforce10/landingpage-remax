import React from "react";
import HeadingText from "../elements/HeadingText";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { bankSupport } from "@/lib/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Whyme = () => {
  return (
    <section className="bg-[#EEF8FE] py-20">
      <div className="container max-w-[1250px] mx-auto px-8 pb-8 whitespace-nowrap">
        <HeadingText text={"RE/MAX"} highlight={"Partner"} />
      </div>
      <Marquee pauseOnHover={true}>
        {bankSupport.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[150px] h-[120px] rounded-xl flex justify-center items-center cursor-pointer shadow-sm mx-2
            hover:border-blue-remax hover:border-2 transition-all box-border"
          >
            <Image
              src={`/bank/${item.image}`}
              alt="bank"
              width={100}
              className="w-full h-full object-contain max-w-[100px]"
              height={100}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Whyme;
