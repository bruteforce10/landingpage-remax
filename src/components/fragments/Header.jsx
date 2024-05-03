import React from "react";
import Montserratt from "@/services/FontPremier";
import ImgHeader from "../elements/ImgHeader";

const Header = () => {
  return (
    <header className="max-lg:bg-gradient-to-b from-[#EEF8FE] to-white bg-[#EEF8FE]">
      <div className="container px-8 mx-auto py-20 max-md:py-14 max-w-[1250px] items-center grid grid-cols-1 gap-y-12 max-lg:justify-items-center lg:grid-cols-2 justify-items-end ">
        <div className="space-y-8 max-lg:text-center">
          <h1
            className={`${Montserratt.className} max-sm:text-5xl text-6xl md:text-7xl font-bold bg-gradient-to-tr from-blue-remax to-[#3f63a2] bg-clip-text text-transparent py-2`}
          >
            Franchise
            <br />
            Opportunity
          </h1>
          <h3 className={`${Montserratt.className} text-2xl max-md:text-xl`}>
            The owner and the business are <br />
            <span className="font-bold ">one in the same thing.</span>{" "}
          </h3>
          <p className="max-w-xl text-lg max-md:text-md">
            Jadilah Bagian dari RE/MAX Indonesia dengan peluang yang luar biasa.
            Dapatkan dukungan, pelatihan, dan jaringan broker berbakat yang akan
            menginspirasi Anda untuk bekerja menuju kesuksesan.
          </p>
        </div>
        <ImgHeader />
      </div>
    </header>
  );
};

export default Header;
