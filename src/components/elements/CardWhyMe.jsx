import Montserratt from "@/services/FontPremier";
import Image from "next/image";
import React from "react";

const CardWhyMe = ({
  backgroundColor,
  textColor,
  heading,
  shortDescription,
  description,
  icon,
  image,
  number,
}) => {
  return (
    <>
      <div
        className={`w-full h-64 max-sm:h-60 bg-${backgroundColor} text-${textColor} py-12 px-8 rounded-xl relative overflow-hidden flex flex-col justify-center items-start`}
      >
        <div className="space-y-3 pb-6">
          <h4
            className={`${Montserratt.className} max-sm:text-xl text-2xl  font-semibold`}
          >
            {heading}
          </h4>
          <p className=" text-md max-sm:text-sm max-w-[80%]">
            {shortDescription}
          </p>
        </div>
        <button
          className="underline underline-offset-2 text-[#4586F6] font-medium"
          onClick={() =>
            document.getElementById(`my_modal_${number}`).showModal()
          }
        >
          Baca Lebih Lanjut
        </button>
        <Image
          src={icon?.url}
          alt="why-me"
          width={200}
          className="absolute w-full h-auto sm:min-w-28 max-w-32 max-sm:max-w-20 -right-2 -bottom-4"
          height={200}
        />
      </div>
      <dialog id={`my_modal_${number}`} className="modal p-8">
        <div className="modal-box bg-${backgroundColor} text-${textColor} w-[1200px] max-sm:w-full  min-h-[500px] flex flex-col justify-between   ">
          <div className="py-8 px-8 ">
            <h4
              className={`${Montserratt.className} max-sm:text-xl text-2xl pb-4 font-semibold`}
            >
              {heading}
            </h4>
            <p
              className=" text-md max-sm:text-sm"
              dangerouslySetInnerHTML={{ __html: description?.html }}
            ></p>
          </div>
          <Image
            src={image?.url}
            alt="why-me"
            width={600}
            className=" w-full h-60 object-cover  object-left-center"
            height={200}
          />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default CardWhyMe;
