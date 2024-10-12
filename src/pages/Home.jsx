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
import TravelsSwiper from "../components/travels-swiper";
import Location from "../assets/location.svg";
import Group from "../assets/group.svg";
import Instagram from "../assets/instagram.webp";
import Telegram from "../assets/telegram.webp";
import axios from "axios";
AOS.init();

const Home = () => {
  const { t, i18n } = useTranslation();

  const SendMessage = (e) => {
    e.preventDefault();
    const { name, surname, phone, comment } = e.target.elements;
    console.log(name.value, surname.value, phone.value, comment.value);
    let TOKEN = "7518121126:AAEbXnVT1vRJX2AdvVx_cBHKHx7PmIoOLic";
    let CHAT_ID = "-1002446413525";
    let URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    let message = `<b>Example:</b>\n`;
    message += `<b>Name: ${name.value} </b>\n`;
    message += `<b>Sur Name: ${surname.value}</b>\n`;
    message += `<b>Phone: ${phone.value}</b>\n`;
    message += `<b>comment: ${comment.value}</b>\n`;
    axios.post(`${URL}`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    }).then(res => console.log(res)).catch(err => console.log(err));
  };

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
            <li className="hover:text-red-500 hover:border-b-[2px] uppercase hover:border-red-500 duration-300 cursor-pointer">
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
              {t("Priorities")}
            </h2>
            <div className="w-[48px] h-[4px] bg-[#FF0000] mx-auto"></div>
            <div className="pt-[15px] text-white w-[934px] text-[17px] font-semibold mx-auto">
              <p>{t("Priorities_text")}</p>
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
              <p>{t("Priorities1")}</p>
            </div>
            <div className="flex flex-col gap-[20px] text-[18px] font-semibold">
              <img
                src={Prioritet2}
                alt="Prioritet1"
                className="w-[135px] h-[135px]"
              />
              <p>{t("Priorities2")}</p>
            </div>
            <div className="flex flex-col gap-[20px] text-[18px] font-semibold">
              <img
                src={Prioritet3}
                alt="Prioritet1"
                className="w-[135px] h-[135px]"
              />
              <p>{t("Priorities3")}</p>
            </div>
            <div className="flex flex-col gap-[20px] text-[18px] font-semibold">
              <img
                src={Prioritet4}
                alt="Prioritet1"
                className="w-[135px] h-[135px]"
              />
              <p>{t("Priorities4")}</p>
            </div>
          </div>
          <div className="mt-[100px] w-[975px] text-white  h-[345px] mx-auto time rounded-[25px]">
            <div data-aos="fade-up">
              <h2 className="pt-[52px] text-[50px] font-semibold">
                {t("We in Numbers")}
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
                  <p className="text-[20px] font-semibold">
                    {t("Issued Visas")}
                  </p>
                </div>
                <div>
                  <div
                    data-aos="zoom-in"
                    className="text-[100px] font-semibold"
                  >
                    <SlotCounter value={7257} />
                  </div>
                  <p className="text-[20px] font-semibold">
                    {t("Successful Trips")}
                  </p>
                </div>
                <div>
                  <div
                    data-aos="zoom-in"
                    className="text-[100px] font-semibold"
                  >
                    <SlotCounter value={7250} />
                  </div>
                  <p className="text-[20px] font-semibold">
                    {t("Satisfied Clients")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="zoom-in" className="w-[1200px] mx-auto mb-[80px]">
          <BasicTabs />
        </section>
        <section className="travels h-[960px] w-[screen] bg-black">
          <div className="w-[1300px] mx-auto">
            <TravelsSwiper />
          </div>
        </section>
      </main>
      <footer className="w-screen h-[814px] bg-black pt-[50px]">
        <div className="w-[1300px] h-[650px] mx-auto flex gap-[85px]">
          <div className="flex flex-col text-white">
            <div data-aos="fade-right" className="flex flex-col relative">
              <h2 className="text-[48px] font-semibold">Contact</h2>
              <span className="top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
            </div>
            <h3 className="mt-[35px]">For Contact:</h3>
            <a href="tel:" className="mt-[15px]">
              +998 99 712 66 66
            </a>
            <a href="tel:">+998 97 483 99 99</a>
            <div className="flex gap-[20px] flex-col mt-[35px]">
              <h3>Social media</h3>
              <a
                target="_blank"
                href="https://www.instagram.com/easy.visa.uzb/?igsh=aXI4bG9mMm5sczZ3&utm_source=qr"
                className="flex gap-[5px] hover:text-red-500"
              >
                <img src={Instagram} alt="loca" className="w-[30px] h-[30px]" />
                easy.visa.uzb
              </a>
              <div className="flex items-center gap-[5px]">
                <img
                  src={Telegram}
                  alt="telegram"
                  className="w-[30px] h-[30px]"
                />
                <div className="flex flex-col">
                  <a target="_blank" href="https://t.me/Ataev_Bakhodir90">
                    t.me/Ataev_Bakhodir90
                  </a>
                  <a target="_blank" href="https://t.me/sevaraataeva1986">
                    t.me/sevaraataeva1986
                  </a>
                </div>
              </div>
              <a
                href="https://t.me/easyvizatourconsulting"
                target="_blank"
                className="flex items-center gap-[5px] hover:text-red-500"
              >
                <img src={Group} alt="loca" className="w-[35px] h-[35px]" />
                Telegram
              </a>
              <div className="flex items-center gap-[5px] hover:text-red-500">
                <img src={Location} alt="loca" className="w-[35px] h-[35px]" />
                Tashkent, Mustaqillik 59.
              </div>
            </div>
          </div>
          <div>
            <iframe
              className="rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.12897814137!2d69.67134522515748!3d41.151268931814066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afb2d4577a4a75%3A0x79d9d2c0e3535831!2z0YPQuy4g0JzRg9GB0YLQsNC60LjQu9C70LjQuiA1OSwgMTEwMjI2LCDQmtGA0LDRgdC90L7Qs9C-0YDRgdC6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1728709767193!5m2!1sru!2s"
              width="500"
              height="500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <h2 className="text-[38px] text-white font-semibold">
              Submit a request
            </h2>
            <form onSubmit={SendMessage} className="mt-[20px]">
              <div className="flex flex-col gap-[24px] w-[350px]">
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Name"
                  className="h-[44px] text-[#D5192F] caret-red-500 outline-none px-[20px] w-full rounded-md"
                />
                <input
                  type="text"
                  required
                  name="surname"
                  placeholder="Surname"
                  className="h-[44px] text-[#D5192F] outline-none caret-red-500 px-[20px] w-full rounded-md"
                />
                <input
                  type="number"
                  required
                  name="phone"
                  placeholder="Telephone"
                  className="h-[44px] caret-red-500 outline-none text-[#D5192F]  px-[20px] w-full rounded-md"
                />
                <textarea
                  type="text"
                  required
                  placeholder="Comments"
                  name="comment"
                  className="h-[175px] text-[#D5192F] caret-red-500 outline-none pt-[10px] px-[20px] w-full rounded-md"
                />
                <button
                  className="bg-[#D5192F] text-white py-[10px] rounded-md"
                  type="submit"
                >
                  Submit a request
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
