import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import WorkSlider1 from "../assets/work-slide1.jpg"
import WorkSlider2 from "../assets/work-slide2.jpg"
import WorkSlider3 from "../assets/work-slide3.jpg"
import WorkSlider4 from "../assets/work-slide4.jpg"
import WorkSlider5 from "../assets/work-slide5.jpg"
import WorkSlider6 from "../assets/work-slide6.jpg"
import { useTranslation } from 'react-i18next';
import "../i18n";

export default function TravelsSwiper() {
  const { t, i18n } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div
            data-aos="fade-right"
            className="flex flex-col ml-[30px] relative text-white w-[1130px] mx-auto pt-[75px]"
          >
            <h2 className="text-[48px] font-semibold">{t("travels")}</h2>
            <span className="top-[145px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
          </div>
      <Swiper data-aos="zoom-in-up" data-aos-duration="1000" autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} pagination={{
          clickable: true,
        }} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper select-none text-white w-[1232px] mt-[40px]">
        {[WorkSlider1, WorkSlider2, WorkSlider3, WorkSlider4, WorkSlider5, WorkSlider6].map((item, index) => (
          <SwiperSlide key={index}><img src={item} alt="workslide" className='w-[90%] rounded-lg mx-auto h-[700px] object-cover' /></SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}
