import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Popular1 from '../assets/popular1.jpg';
import Popular2 from '../assets/popular2.jpg';
import Popular3 from '../assets/popular3.jpg';
import Popular4 from '../assets/popular4.jpg';
import Popular5 from '../assets/popular5.jpg';
import Popular6 from '../assets/popular6.jpg';
import Popular7 from '../assets/popular7.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Demo() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper flex justify-center">
        <SwiperSlide><div className='flex justify-center'><img src={Popular1} alt="popular" className='max-w-[400px] max-h-[200px]  my-[100px] rounded-md'/></div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={Popular2} alt="popular" className='max-w-[400px] max-h-[200px]  my-[100px] rounded-md'/></div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={Popular3} alt="popular" className='max-w-[400px] max-h-[200px]  my-[100px] rounded-md'/></div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={Popular4} alt="popular" className='max-w-[400px] max-h-[200px]  my-[100px] rounded-md'/></div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={Popular5} alt="popular" className='max-w-[400px] max-h-[200px]  my-[100px] rounded-md'/></div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={Popular6} alt="popular" className='max-w-[400px] max-h-[200px]  my-[100px] rounded-md'/></div></SwiperSlide>
        <SwiperSlide><div className='flex justify-center'><img src={Popular7} alt="popular" className='max-w-[400px] max-h-[200px]  my-[100px] rounded-md'/></div></SwiperSlide>
        
      </Swiper>
    </>
  );
}
