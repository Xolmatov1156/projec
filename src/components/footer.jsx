import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Footer1 from "../assets/work-slide1.jpg"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function FooterSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-start justify-center space-x-6">
      {/* Main large Swiper (Left Column) */}
      <div className="w-full md:w-[70%]">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={Footer1} alt="footer1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Thumbnail Swiper (Right Column) */}
      <div className="w-full md:w-[30%] mt-6 md:mt-0">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="w-full h-[150px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="w-full h-[150px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="w-full h-[150px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="w-full h-[150px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="w-full h-[150px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="w-full h-[150px] object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
