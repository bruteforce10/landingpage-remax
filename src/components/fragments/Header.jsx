import React from "react";
import Montserratt from "@/services/FontPremier";
import ImgHeader from "../elements/ImgHeader";

const Header = () => {
  return (
    <header className="bg-[#EEF8FE]">
      <div className="container px-8 mx-auto py-20  items-center grid grid-cols-2 justify-items-center">
        <div className="space-y-8 ">
          <h1
            className={`${Montserratt.className} text-7xl font-bold bg-gradient-to-tr from-blue-remax to-[#3f63a2] bg-clip-text text-transparent py-2`}
          >
            Franchise
            <br />
            Opportunity
          </h1>
          <h3 className={`${Montserratt.className} text-2xl `}>
            The owner and the business are <br />{" "}
            <span className="font-bold">one in the same thing.</span>{" "}
          </h3>
          <p className="max-w-xl text-lg">
            Jadilah Bagian dari RE/MAX Indonesia dengan peluang yang luar biasa.
            Dapatkan dukungan, pelatihan, dan jaringan broker berbakat yang akan
            menginspirasi Anda untuk bekerja menuju kesuksesan
          </p>
        </div>
        <ImgHeader />
      </div>
    </header>
  );
};

export default Header;
