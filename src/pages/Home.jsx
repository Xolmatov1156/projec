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
import Excursion1 from "../assets/tur1.mp4";
import Excursion2 from "../assets/tur2.mp4";
import Excursion3 from "../assets/tur3.mp4";
import Client1 from "../assets/Client-1.mp4";
import Client2 from "../assets/Client-2.mp4";
import Client3 from "../assets/Client-3.mp4";
import Prioritet1 from "../assets/prioritet-1.webp";
import Prioritet2 from "../assets/prioritet-2.svg";
import Prioritet3 from "../assets/prioritet-3.svg";
import Prioritet4 from "../assets/prioritet-4.svg";
import SlotCounter from "react-slot-counter";
import AOS from "aos";
import "aos/dist/aos.css";
import BasicTabs from "../components/Tabs";
import FooterSwiper from "../components/footer";
AOS.init();

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className=" bg-white z-20 top-0 left-0 px-[210px] right-0  background fixed  mx-auto ">
        <div className="max-w-[1300px] mx-auto h-[80px] flex items-center justify-between">
          <img
            src={Logo}
            alt="logo"
            className="w-[80px] md:w-[100px] h-[58px]"
          />
          <ul className="flex space-x-[15px] md:space-x-[25px] text-[12px] md:text-[14px] font-bold uppercase">
            <li className="hover:text-red-500 hover:border-b-[2px] border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="#about">{t("about")}</a>
            </li>
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer uppercase">
              <a href="#countreies">{t("countries")}</a>
            </li>
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="#services">{t("services")}</a>
            </li>
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="#ourworks">{t("ourworks")}</a>
            </li>
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="#contact">{t("contact")}</a>
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
        <section className="popular  w-[1300px] h-[385px] mx-auto">
          <div
            data-aos="fade-right"
            className="flex flex-col ml-[30px] relative mt-[65px]"
          >
            <h2 data-aos-duration="500" className=" text-[48px] font-semibold">
              {t("Populars")}
            </h2>
            <span className="top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
          </div>
          <SwiperDemo />
        </section>
        <section
          id="about"
          className="about h-[700px] mt-[76px] w-[1300px] mx-auto"
        >
          <div className="flex space-x-[100px]">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="w-[580px] relative"
            >
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
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="relative"
            >
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
          <div
            data-aos="fade-right"
            className="flex flex-col ml-[30px] relative"
          >
            <h2 className="text-[48px] font-semibold">{t("countries")}</h2>
            <span className="top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
          </div>

          <ul className="flex flex-wrap mt-[40px] justify-between gap-[30px]">
            {[
              { image: Countries1, name: t("Paris"), flag: Flag1 },
              { image: Countries2, name: t("Canada"), flag: Flag2 },
              { image: Countries3, name: t("usa"), flag: Flag3 },
              { image: Countries4, name: t("uk"), flag: Flag4 },
              { image: Countries5, name: t("austraila"), flag: Flag5 },
              { image: Countries6, name: t("new zealand"), flag: Flag6 },
              { image: Countries7, name: t("japan"), flag: Flag7 },
              { image: Countries8, name: t("korea"), flag: Flag8 },
              { image: Countries9, name: t("Brazil"), flag: Flag9 },
            ].map((country, index) => (
              <li
                key={index}
                data-aos="zoom-in"
                data-aos-duration="500"
                className="w-[350px] overflow-hidden h-[282px] rounded-tr-[25px] rounded-tl-[25px] uppercase flex flex-col border-b-[4px] shadow-lg relative border-red-500 duration-300"
              >
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={country.image}
                    alt={`country${index + 1}`}
                    className="rounded-tr-[25px] rounded-tl-[25px] duration-500 w-[350px] h-[200px] transition-all ease-in-out hover:scale-150 hover:rounded-[25px]"
                  />
                </div>

                <div className="bg-white h-[80px] flex items-center justify-center gap-[20px]">
                  <h3 className="text-[22px] text-center font-semibold">
                    {t(country.name)}
                  </h3>
                  <img
                    src={country.flag}
                    alt={`flag${index + 1}`}
                    height={50}
                    width={73}
                    className=" w-[73px] absolute right-[5px] h-[50px] shadow-md shadow-black text-end rounded-[25px]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section
          id="ourworks"
          className="excursion w-[1300px] mx-auto mt-[62px]"
        >
          <div>
            <div data-aos="fade-right" className="flex flex-col relative">
              <h2 className="text-[48px] font-semibold">{t("Excursion")}</h2>
              <span className="top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
            </div>
            <div className="mt-[30px] ml-[87px] flex gap-[122px]">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="600"
                className="relative w-[300px]"
              >
                <video
                  className="w-[300px] h-[400px] object-cover rounded-lg"
                  controls
                >
                  <source src={Excursion1} type="video/mp4" />
                </video>
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[100px] h-[58px] absolute bottom-[370px] right-[230px]"
                />
              </div>
              <div
                data-aos="zoom-out-up"
                data-aos-duration="600"
                className="relative w-[300px]"
              >
                <video
                  className="w-[300px] h-[400px] object-cover rounded-lg"
                  controls
                >
                  <source src={Excursion2} type="video/mp4" />
                </video>
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[100px] h-[58px] absolute bottom-[370px] right-[230px]"
                />
              </div>
              <div
                data-aos="zoom-out-up"
                data-aos-duration="600"
                className="relative w-[300px]"
              >
                <video
                  className="w-[300px] h-[400px] object-cover rounded-lg"
                  controls
                >
                  <source src={Excursion3} type="video/mp4" />
                </video>
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[100px] h-[58px] absolute bottom-[370px] right-[230px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="client w-[1300px] mx-auto mt-[62px]">
          <div>
            <div data-aos="fade-right" className="flex flex-col relative">
              <h2 className="text-[48px] font-semibold">
                {t("Client Reviews")}
              </h2>
              <span className="top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
            </div>
            <div className="mt-[30px] ml-[87px] flex gap-[122px]">
              <div
                data-aos="zoom-out-up"
                data-aos-duration="600"
                className="relative w-[300px]"
              >
                <video
                  className="w-[300px] h-[400px] object-cover rounded-lg"
                  controls
                >
                  <source src={Client1} type="video/mp4" />
                </video>
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[100px] h-[58px] absolute bottom-[370px] right-[230px]"
                />
              </div>
              <div
                data-aos="zoom-out-up"
                data-aos-duration="600"
                className="relative w-[300px]"
              >
                <video
                  className="w-[300px] h-[400px] object-cover rounded-lg"
                  controls
                >
                  <source src={Client2} type="video/mp4" />
                </video>
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[100px] h-[58px] absolute bottom-[370px] right-[230px]"
                />
              </div>
              <div
                data-aos="zoom-out-up"
                data-aos-duration="600"
                className="relative w-[300px]"
              >
                <video
                  className="w-[300px] h-[400px] object-cover rounded-lg"
                  controls
                >
                  <source src={Client3} type="video/mp4" />
                </video>
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[100px] h-[58px] absolute bottom-[370px] right-[230px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="priorities w-screen text-center h-[780px] mb-[200px] mt-[70px]">
          <div data-aos="fade-down">
            <h2 className="pt-[77px] text-[55px] text-white font-semibold">
              Priorities in Tourism and Visas
            </h2>
            <div className="w-[48px] h-[4px] bg-[#FF0000] mx-auto"></div>
            <div className="pt-[15px] text-white w-[934px] text-[17px] font-semibold mx-auto">
              <p>
                We provide a high level of service and reliability in obtaining
                tourist visas. Our team has experience in the tourism industry
                and is ready to quickly resolve issues related to obtaining
                visas. We strive to make our clients' travels comfortable and
                carefree, providing support at every stage—from choosing a visa
                to obtaining documentation.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-[1260px] flex justify-between mx-auto mt-[80px] text-white"
          >
            <div className="flex flex-col gap-[20px] text-[18px] font-semibold">
              <img
                src={Prioritet1}
                alt="Prioritet1"
                className="w-[135px] h-[135px]"
              />
              <p>Saving Your Time</p>
            </div>
            <div className="flex flex-col gap-[20px] text-[18px] font-semibold">
              <img
                src={Prioritet2}
                alt="Prioritet1"
                className="w-[135px] h-[135px]"
              />
              <p>Reliability</p>
            </div>
            <div className="flex flex-col gap-[20px] text-[18px] font-semibold">
              <img
                src={Prioritet3}
                alt="Prioritet1"
                className="w-[135px] h-[135px]"
              />
              <p>Support</p>
            </div>
            <div className="flex flex-col gap-[20px] text-[18px] font-semibold">
              <img
                src={Prioritet4}
                alt="Prioritet1"
                className="w-[135px] h-[135px]"
              />
              <p>Convenience</p>
            </div>
          </div>
          <div className="mt-[100px] w-[975px] text-white  h-[345px] mx-auto time rounded-[25px]">
            <div data-aos="fade-up">
              <h2 className="pt-[52px] text-[50px] font-semibold">
                We in Numbers
              </h2>
              <div className="w-[48px] h-[4px] bg-white flex justify-center  mx-auto"></div>
              <div className="flex w-[970px] justify-around gap-[20px]">
                <div className="flex flex-col">
                  <div
                    data-aos="zoom-in"
                    className="text-[100px] font-semibold"
                  >
                    <SlotCounter value={7320} />
                  </div>
                  <p className="text-[20px] font-semibold">Issued Visas</p>
                </div>
                <div>
                  <div
                    data-aos="zoom-in"
                    className="text-[100px] font-semibold"
                  >
                    <SlotCounter value={7320} />
                  </div>
                  <p className="text-[20px] font-semibold">Successful Trips</p>
                </div>
                <div>
                  <div
                    data-aos="zoom-in"
                    className="text-[100px] font-semibold"
                  >
                    <SlotCounter value={7320} />
                  </div>
                  <p className="text-[20px] font-semibold">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="zoom-in" className="w-[1200px] mx-auto mb-[80px]">
        <BasicTabs/>
        </section>
        <section className="travels h-[960px] w-[screen]">
          <div className="w-[1300px] mx-auto">
          <FooterSwiper/>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
