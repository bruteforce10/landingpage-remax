import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const InfoHeader = () => {
  return (
    <>
      <Swiper
        className="w-[200px]"
        slidesPerView={1}
        spaceBetween={10}
        onSlideChange={() => console.log("slide change")}
        onSwiper={() => console.log("swiper")}
        pagination={true}
        modules={[Pagination]}
      >
        <SwiperSlide>
          {" "}
          <div
            className={` rounded-xl w-[200px] h-[200px] flex flex-col items-center justify-center bg-red-remax text-white`}
          >
            <h5 className="text-7xl font-bold">115+</h5>
            <p className="text-center">Memiliki Cabang Di berbagai negara</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className={` rounded-xl w-[200px] h-[200px] flex flex-col items-center justify-center bg-blue-remax text-white`}
          >
            <h5 className="text-7xl font-bold">115+</h5>
            <p className="text-center">Memiliki Cabang Di berbagai negara</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
