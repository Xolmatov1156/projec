import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSwiper() {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="h-[100vh] w-screen"
      >
        <SwiperSlide className="relative">
          <div className="hero-back w-screen hero-swiper h-[100vh] flex justify-center items-center relative">
            <h1 className="uppercase text-white hero-text bg-black/40 rounded-lg text-[50px] text-center max-w-4xl px-4 z-10">
              {t("Your comfort in travel is our concern")}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="hero-back2 w-screen hero-swiper h-[100vh] flex justify-center items-center relative">
            <div className="absolute inset-0 bg-black/80 opacity-60"></div> 
            <h1 className="uppercase text-white hero-text bg-black/60 text-[50px] rounded-lg text-center max-w-4xl px-4 z-10">
              {t("Reliable visa processing for all countries")}
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="hero-back3 w-screen hero-swiper h-[100vh] flex justify-center items-center relative">
            <div className="absolute inset-0 bg-black/80 opacity-70"></div> 
            <h1 className="uppercase text-white hero-text bg-black/60 text-[50px] w-[900px] text-center rounded-lg z-10">
              {t("The best tourist routes at affordable prices")}
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}