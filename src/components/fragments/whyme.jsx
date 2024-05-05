import React, { useEffect, useState } from "react";
import HeadingText from "../elements/HeadingText";
import dynamic from "next/dynamic";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import Image from "next/image";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "../elements/Button";

const WhyMe = ({ whyMes }) => {
  const [number, setNumber] = useState(6);
  const [show, setShow] = useState(false);
  const CardWhyMeNoSSR = dynamic(
    () => import("@/components/elements/CardWhyMe"),
    {
      ssr: false,
    }
  );

  useEffect(() => {
    const handleResize = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      setNumber(isLandscape ? 6 : 3);
      setShow(isLandscape ? false : true);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sortedWhyMes = whyMes.sort(
    (a, b) => Number(a.number) - Number(b.number)
  );

  return (
    <section className="bg-[#EEF8FE] py-20 relative overflow-hidden">
      <Image
        src="/remax-balon.webp"
        alt="remax-balon"
        width={500}
        height={200}
        className="absolute w-full h-auto min-w-28 max-w-44 max-sm:max-w-16 -right-2 top-12"
      />
      <div className="container max-w-[1250px] mx-auto">
        <div className="text-center space-y-3">
          <HeadingText text={"Mengapa"} highlight={"Kita"} />
          <div className="w-20 h-0.5 rounded-full bg-blue-remax max-lg:mx-auto max-lg:mt-2 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-4 justify-center ">
          {sortedWhyMes.map(
            (item, index) =>
              index < number && (
                <CardWhyMeNoSSR
                  key={index}
                  {...item}
                  backgroundColor={
                    index === 1 || index === 2 || index === 5
                      ? "blue-warm"
                      : "blue-soft"
                  }
                  textColor={
                    index === 1 || index === 2 || index === 5
                      ? "white"
                      : "blue-remax-2"
                  }
                />
              )
          )}
        </div>
        {show && (
          <button
            className="underline text-xl underline-offset-2 text-[#4586F6] font-medium mx-auto w-full mt-4"
            onClick={() => setNumber(whyMes.length === number ? 3 : 6)}
          >
            <span>{whyMes.length === number ? "Tutup" : "Lihat Semua"}</span>
            {whyMes.length === number ? (
              <FaArrowUp className="inline-block ml-1" />
            ) : (
              <FaArrowDown className="inline-block ml-1" />
            )}
          </button>
        )}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-center  text-lg max-sm:text-sm leading-relaxed opacity-75">
            dapat mengunduh business proposal lengkap kami melalui dibawah ini{" "}
          </p>
          <Button onClick={() => window.open("/business-proposal.pdf")}>
            <span>Business Proposal</span>
            <IoDocumentTextOutline className="inline-block ml-2 text-lg" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
