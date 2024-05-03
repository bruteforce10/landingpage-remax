import React from "react";
import AboutImg from "../elements/aboutImg";
import HeadingText from "../elements/HeadingText";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 max-lg:pt-0 max-lg:-mt-12 max-md:mt-[-24px] container max-w-[1250px] px-8 mx-auto max-xl:gap-x-36 gap-y-8 grid grid-cols-1 max-lg:text-center lg:grid-cols-2"
    >
      <AboutImg />
      <div className="space-y-8 max-lg:mt-8 max-sm:mt-0">
        <div>
          <HeadingText text={"Kitalah"} highlight={"RE/MAX!"} />
          <div className="w-16 h-0.5 rounded-full bg-blue-remax max-lg:mx-auto max-lg:mt-2"></div>
        </div>
        <p className="leading-relaxed max-lg:max-w-[40rem] max-lg:mx-auto">
          RE/MAX (NYSE: RMAX) hadir di Indonesia sejak tahun 2014 dan telah
          memulai revolusi dalam transaksi properti. Dengan kehadiran di 115
          negara dan wilayah, RE/MAX memiliki jaringan lebih dari 8.300 kantor
          dan 135.000 agen.
          <br /> <br /> Didirikan dengan mimpi, RE/MAX percaya pada konsep
          maksimum yang menggabungkan pelatihan kelas dunia dan teknologi
          canggih untuk memberdayakan agen properti dan pemilik bisnis. Ini
          telah mengubah industri properti dan menciptakan kekuatan global
          dengan kehadiran di seluruh dunia.
        </p>
      </div>
    </section>
  );
};

export default About;
