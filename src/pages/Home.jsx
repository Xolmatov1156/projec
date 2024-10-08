import React from "react";
import Logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import "../i18n";
import Uzb from "../assets/uz.svg";
import Rus from "../assets/ru.svg";
import En from "../assets/sh.svg";
import HeroSwiper from "../components/swiper";
import SwiperDemo from "../components/popularswiper";
import About from "../assets/about.jpg";
import Countries1 from "../assets/countries1.jpg";
import Countries2 from "../assets/countries2.jpeg";
import Countries3 from "../assets/countries3.jpg";
import Countries4 from "../assets/countries4.jpg";
import Countries5 from "../assets/countries5.jpg";
import Countries6 from "../assets/countries6.jpg";
import Countries7 from "../assets/countries7.jpg";
import Countries8 from "../assets/countries8.jpg";
import Countries9 from "../assets/countries9.jpg";
import Flag1 from "../assets/flag1.png";
import Flag2 from "../assets/flag2.png";
import Flag3 from "../assets/flag3.jpg";
import Flag4 from "../assets/flag4.jpg";
import Flag5 from "../assets/flag5.jpg";
import Flag6 from "../assets/flag6.png";
import Flag7 from "../assets/flag7.jpg";
import Flag8 from "../assets/flag8.jpg";
import Flag9 from "../assets/flag9.png";

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className=" bg-white z-20 top-0 left-0 px-[210px] right-0  background fixed  mx-auto ">
        <div className="max-w-[1300px] mx-auto h-[80px] flex items-center justify-between">
          <img src={Logo} alt="logo" className="w-[80px] md:w-[100px] h-auto" />
          <ul className="flex space-x-[15px] md:space-x-[25px] text-[12px] md:text-[14px] font-bold uppercase">
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="#about">{t("about")}</a>
            </li>
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="#countreies">{t("countreies")}</a>
            </li>
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="services">{t("services")}</a>
            </li>
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="ourworks">{t("ourworks")}</a>
            </li>
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="contact">{t("contact")}</a>
            </li>
            <div className="flex space-x-[10px] md:space-x-[20px]">
              <button onClick={() => changeLanguage("uz")}>
                <img
                  src={Uzb}
                  alt="uzb"
                  width={30}
                  height={30}
                  className="rounded-[5px]"
                />
              </button>
              <button onClick={() => changeLanguage("ru")}>
                <img
                  src={Rus}
                  alt="rus"
                  width={30}
                  height={30}
                  className="rounded-[5px]"
                />
              </button>
              <button onClick={() => changeLanguage("en")}>
                <img
                  src={En}
                  alt="en"
                  width={30}
                  height={30}
                  className="rounded-[5px]"
                />
              </button>
            </div>
          </ul>
        </div>
      </header>
      <main>
        <section className="hero h-[100vh]">
          <HeroSwiper />
        </section>
        <section className="popular w-[1300px] h-[385px] mx-auto">
          <div className="flex flex-col ml-[30px] relative mt-[65px]">
            <h2 className=" text-[48px] font-semibold">{t("Populars")}</h2>
            <span className="top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
          </div>
          <SwiperDemo />
        </section>
        <section
          id="about"
          className="about h-[700px] mt-[76px] w-[1300px] mx-auto"
        >
          <div className="flex space-x-[100px]">
            <div className="w-[580px] relative">
              <div className="w-[508px] h-[2px] absolute bg-[#FF0000]"></div>
              <div className="flex flex-col relative pt-[62px] mb-[32px]">
                <h2 className="text-[48px] font-semibold">{t("about")}</h2>
                <span className="top-[130px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
              </div>
              <p className=" font-semibold text-[18px]">{t("about1")}</p>
              <p className="font-semibold text-[18px] mt-[36px]">
                {t("about2")}
              </p>
              <p className="font-semibold text-[18px] mt-[36px]">
                {t("about3")}
              </p>
              <div className="w-[508px] h-[2px] absolute bg-[#FF0000] mt-[64px]"></div>
            </div>
            <div className="relative">
              <img src={About} alt="about" className="rounded-lg" />
              <img
                src={Logo}
                alt="logo"
                className="absolute h-[145px] w-[250px] top-[510px]"
              />
            </div>
          </div>
        </section>
        <section id="countreies" className="countries w-[1300px] mx-auto">
  <div className="flex flex-col ml-[30px] relative">
    <h2 className="text-[48px] font-semibold">Countries</h2>
    <span className="top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
  </div>

  <ul className="flex flex-wrap mt-[40px] justify-between gap-[30px]">
    {[
      { image: Countries1, name: "Paris", flag: Flag1 },
      { image: Countries2, name: "Canada", flag: Flag2 },
      { image: Countries3, name: "usa", flag: Flag3 },
      { image: Countries4, name: "uk", flag: Flag4 },
      { image: Countries5, name: "AUSTRALIA", flag: Flag5 },
      { image: Countries6, name: "NEW ZEALAND", flag: Flag6 },
      { image: Countries7, name: "JAPAN", flag: Flag7 },
      { image: Countries8, name: "KOREA", flag: Flag8 },
      { image: Countries9, name: "Brazil", flag: Flag9 },
    ].map((country, index) => (
      <li
        key={index}
        className="w-[350px] overflow-hidden h-[282px] uppercase flex flex-col border-b-[4px] shadow-lg relative border-red-500 duration-300"
      >
        <img
          src={country.image}
          alt={`country${index + 1}`}
          className="rounded-tr-[25px] rounded-tl-[25px] duration-300 max-w-[350px] max-h-[200px] transition-all ease-in-out hover:scale-110 hover:rounded-[25px] active:scale-110 active:rounded-[25px] focus:scale-110 focus:rounded-[25px]"
        />
        <div className="bg-white h-[80px]">
          <h3 className="mt-[30px] text-[22px] text-center font-semibold">
            {country.name}
          </h3>
          <img
            src={country.flag}
            alt={`flag${index + 1}`}
            height={50}
            width={73}
            className="absolute w-[73px] h-[50px] bottom-[10px] right-[7px] rounded-[25px]"
          />
        </div>
      </li>
    ))}
  </ul>
</section>



      </main>
    </>
  );
};

export default Home;
