import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Popular1 from '../assets/popular1.jpg';
import Popular2 from '../assets/popular2.jpg';
import Popular3 from '../assets/popular3.jpg';
import Popular4 from '../assets/popular4.jpg';
import Popular5 from '../assets/popular5.jpg';
import Popular6 from '../assets/popular6.jpg';
import Popular7 from '../assets/popular7.jpg';
import { useTranslation } from 'react-i18next';

const SwiperDemo = () => {
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState(getDirection());

  function getDirection() {
    return window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  }

  useEffect(() => {
    const handleResize = () => {
      setDirection(getDirection());
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="w-[1300px] mt-[26px] h-[100px] ">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        direction={direction}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        className="swiper-container"
        >
          <SwiperSlide
            className="flex justify-center !w-[430px] items-center  ml-[95px]"
            >
            <img src={Popular1} alt="popular1" className='w-[240px] h-[220px] rounded-[15px]'/>
            <p className='ml-[60px] mt-[10px]'>{t('Sharm El-Sheyx')}</p>
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center !w-[430px] items-center"
            >
            <img src={Popular2} alt="popular2" className='w-[240px] h-[220px] rounded-[15px]'/>
            <p className='ml-[100px] mt-[10px]'>{t("Dubay")}</p>
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center !w-[450px] "
            >
            <img src={Popular3} alt="popular3" className='w-[240px] h-[220px] rounded-[15px]'/>
            <p className='ml-[100px] mt-[10px]'>{t("Turkey")}</p>
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center "
            >
            <img src={Popular4} alt="popular4" className='w-[240px] h-[220px] rounded-[15px]'/>
            <p className='ml-[75px] mt-[10px]'>{t("Railay Beach")}</p>
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center "
            >
            <img src={Popular5} alt="popular5" className='w-[240px] h-[220px] rounded-[15px]'/>
            <p className='ml-[41px] mt-[10px]'>{t("Petronas Twin Towers")}</p>
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center"
            >
            <img src={Popular6} alt="popular6" className='w-[240px] h-[220px] rounded-[15px]'/>
            <p className='ml-[90px] mt-[10px]'>{t("Singapore")}</p>
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center"
            >
            <img src={Popular7} alt="popular7" className='w-[240px] h-[220px] rounded-[15px]'/>
            <p className='ml-[90px] mt-[10px]'>{t("Indonesia")}</p>
          </SwiperSlide>
      </Swiper>
      <div className='w-[1300px] mx-auto'>
      <div className="swiper-button-next text-black right-5 md:right-10 transform md:rotate-0 rotate-90 pt-[700px] pr-[100px]"></div>
      <div className="swiper-button-prev text-black left-5 md:left-10 transform md:rotate-0 rotate-90 pt-[700px] pl-[100px]"></div>
      </div>
    </div>

  );
};

export default SwiperDemo;
