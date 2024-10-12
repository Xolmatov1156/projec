import React, { useState } from "react";
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
import { FiAlignJustify } from "react-icons/fi";
import Demo from "../components/demo-mobile";
import axios from "axios";
AOS.init();

const Home = () => {
  const { t, i18n } = useTranslation();

  const SendMessage = (e) => {
    e.preventDefault();
    const { name, surname, phone, comment } = e.target.elements;
    let TOKEN = "7518121126:AAEbXnVT1vRJX2AdvVx_cBHKHx7PmIoOLic";
    let CHAT_ID = "-1002446413525";
    let URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    let message = `<b>New order:</b>\n`;
    message += `<b>Name: ${name.value} </b>\n`;
    message += `<b>SurName: ${surname.value}</b>\n`;
    message += `<b>Phone: ${phone.value}</b>\n`;
    message += `<b>Comment: ${comment.value}</b>\n`;
    axios
      .post(`${URL}`, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      })
      .then((res) => e.target.reset())
      .catch((err) => console.log(err));
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false); // Hide the menu when a link is clicked
  };

  return (
    <>
      <header className="bg-white background z-20 top-0 left-0 right-0 fixed w-full">
        <div className="max-w-[1300px] mx-auto max-h-[80px] flex items-center justify-between px-4 sm:px-10 lg:px-[210px]">
          <img
            src={Logo}
            alt="logo"
            className="w-[60px] sm:w-[80px] header-img md:w-[100px] h-[58px]"
          />
          <ul className="hidden md:flex space-x-[15px] text-[12px] md:text-[14px] font-bold uppercase">
            <li className="hover:text-red-500 hover:border-b-[2px] border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="#about">{t("about")}</a>
            </li>
            <li className="hover:text-red-500 hover:border-b-[2px] hover:border-red-500 duration-300 cursor-pointer">
              <a href="#countries">{t("countries")}</a>
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
          </ul>

          {showMenu && (
            <ul className="md:hidden absolute bg-white text-center right-2 left-2 top-[70px] text-[12px] md:text-[14px] flex flex-col gap-[10px] font-bold uppercase py-[10px] rounded-md">
              <li className="hover:text-red-500  hover:border-red-500 duration-300 cursor-pointer">
                <a href="#about" onClick={handleLinkClick}>
                  {t("about")}
                </a>
              </li>
              <li className="hover:text-red-500  duration-300 cursor-pointer">
                <a href="#countries" onClick={handleLinkClick}>
                  {t("countries")}
                </a>
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                <a href="#services" onClick={handleLinkClick}>
                  {t("services")}
                </a>
              </li>
              <li className="hover:text-red-500  duration-300 cursor-pointer">
                <a href="#ourworks" onClick={handleLinkClick}>
                  {t("ourworks")}
                </a>
              </li>
              <li className="hover:text-red-500 duration-300 cursor-pointer">
                <a href="#contact" onClick={handleLinkClick}>
                  {t("contact")}
                </a>
              </li>
            </ul>
          )}

          <div className="flex space-x-[10px] md:space-x-[20px]">
            <button onClick={toggleMenu} className="md:hidden ">
              <FiAlignJustify />
            </button>

            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="border border-gray-900 header-select rounded-md p-2 bg-white text-black cursor-pointer"
            >
              <option value="uz">UZ</option>
              <option value="ru">Ру</option>
              <option value="en">En</option>
            </select>
          </div>
        </div>
      </header>

      <main>
        <section className="hero h-[100vh]">
          <HeroSwiper />
        </section>
        <section className="popular  max-w-[1300px] h-[385px] mx-auto">
          <div
            data-aos="fade-right"
            className="flex flex-col ml-[30px] relative mt-[65px]"
          >
            <h2 data-aos-duration="500" className=" text-[48px] font-semibold">
              {t("Populars")}
            </h2>
            <span className="top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
          </div>
          <div className="demo">
            <SwiperDemo />
          </div>
          <div className="demo-mobile hidden">
            <Demo />
          </div>
        </section>
        <section
          id="about"
          className="about h-auto mt-[76px] w-full max-w-[1300px] mx-auto px-4"
        >
          <div className="flex flex-col lg:flex-row lg:space-x-[100px] space-y-8 lg:space-y-0">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="w-full lg:w-[580px] relative"
            >
              <div className="w-full lg:w-[508px] h-[2px]  absolute bg-[#FF0000]"></div>
              <div className="flex flex-col relative pt-[62px] mb-[32px]">
                <h2 className="text-[32px] lg:text-[48px] font-semibold">
                  {t("about")}
                </h2>
                <span className="top-[90px] lg:top-[130px] w-[48px] about-red h-[5px] absolute bg-[#FF0000]"></span>
              </div>
              <p className="font-semibold text-[16px] lg:text-[18px]">
                {t("about1")}
              </p>
              <p className="font-semibold text-[16px] lg:text-[18px] mt-[24px] lg:mt-[36px]">
                {t("about2")}
              </p>
              <p className="font-semibold text-[16px] lg:text-[18px] mt-[24px] lg:mt-[36px]">
                {t("about3")}
              </p>
              <div className="w-full lg:w-[508px] h-[2px] absolute bg-[#FF0000] mt-[32px] lg:mt-[64px]"></div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="relative w-full lg:w-auto"
            >
              <img
                src={About}
                alt="about"
                className="w-full lg:w-auto rounded-lg"
              />
              <img
                src={Logo}
                alt="logo"
                className="absolute about-logo h-[80px] w-[150px] lg:h-[145px] lg:w-[250px] top-[250px] lg:top-[510px]"
              />
            </div>
          </div>
        </section>

        <section
          id="countries"
          className="countries w-full max-w-[1300px] mt-[70px] mx-auto px-4"
        >
          <div data-aos="fade-right" className="flex flex-col relative">
            <h2 className="text-[32px] lg:text-[48px] font-semibold">
              {t("countries")}
            </h2>
            <span className="top-[50px] lg:top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
          </div>

          <ul className="flex flex-wrap mt-[40px] justify-between gap-[30px] lg:gap-[30px]">
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
                className="w-full sm:w-[48%] lg:w-[350px] overflow-hidden h-[250px] lg:h-[282px] rounded-tr-[25px] rounded-tl-[25px] uppercase flex flex-col border-b-[4px] shadow-lg relative border-red-500 duration-300"
              >
                <div className="w-full h-[150px] lg:h-[200px] overflow-hidden">
                  <img
                    src={country.image}
                    alt={`country${index + 1}`}
                    className="rounded-tr-[25px] rounded-tl-[25px] duration-500 w-full h-full transition-all ease-in-out hover:scale-150 hover:rounded-[25px]"
                  />
                </div>

                <div className="bg-white h-[80px] flex items-center justify-center gap-[20px]">
                  <h3 className="text-[18px] lg:text-[22px] text-center font-semibold">
                    {t(country.name)}
                  </h3>
                  <img
                    src={country.flag}
                    alt={`flag${index + 1}`}
                    height={40}
                    width={60}
                    className="w-[60px] lg:w-[73px] h-[40px] lg:h-[50px] absolute right-[5px] shadow-md shadow-black text-end rounded-[25px]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="ourworks" className="excursion w-full max-w-[1300px] mx-auto mt-[62px] px-4">
  <div>
    <div data-aos="fade-right" className="flex flex-col relative">
      <h2 className="text-[32px] lg:text-[48px] font-semibold">{t("Excursion")}</h2>
      <span className="top-[50px] lg:top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
    </div>
    <div className="mt-[30px] flex flex-wrap justify-center gap-[20px] lg:gap-[122px]">
      <div data-aos="zoom-out-up" data-aos-duration="600" className="relative w-full sm:w-[300px]">
        <video className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg" controls>
          <source src={Excursion1} type="video/mp4" />
        </video>
        <img
          src={Logo}
          alt="logo"
          className="w-[70px] sm:w-[100px] excursion-logo h-[40px] sm:h-[58px] absolute bottom-[230px] sm:bottom-[370px] right-[170px] sm:right-[230px]"
        />
      </div>
      <div data-aos="zoom-out-up" data-aos-duration="600" className="relative w-full sm:w-[300px]">
        <video className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg" controls>
          <source src={Excursion2} type="video/mp4" />
        </video>
        <img
          src={Logo}
          alt="logo"
          className="w-[70px] sm:w-[100px] excursion-logo h-[40px] sm:h-[58px] absolute bottom-[230px] sm:bottom-[370px] right-[170px] sm:right-[230px]"
        />
      </div>
      <div data-aos="zoom-out-up" data-aos-duration="600" className="relative w-full sm:w-[300px]">
        <video className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg" controls>
          <source src={Excursion3} type="video/mp4" />
        </video>
        <img
          src={Logo}
          alt="logo"
          className="w-[70px] sm:w-[100px] excursion-logo h-[40px] sm:h-[58px] absolute bottom-[230px] sm:bottom-[370px] right-[170px] sm:right-[230px]"
        />
      </div>
    </div>
  </div>
</section>

<section className="client w-full max-w-[1300px] mx-auto mt-[62px] px-4">
  <div>
    <div data-aos="fade-right" className="flex flex-col relative">
      <h2 className="text-[32px] lg:text-[48px] font-semibold">{t("Client Reviews")}</h2>
      <span className="top-[50px] lg:top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
    </div>
    <div className="mt-[30px] flex flex-wrap justify-center gap-[20px] lg:gap-[122px]">
      <div data-aos="zoom-out-up" data-aos-duration="600" className="relative w-full sm:w-[300px]">
        <video className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg" controls>
          <source src={Client1} type="video/mp4" />
        </video>
        <img
          src={Logo}
          alt="logo"
          className="w-[70px] sm:w-[100px] h-[40px] sm:h-[58px] absolute bottom-[200px] sm:bottom-[370px] right-[20px] excursion-logo sm:right-[230px]"
        />
      </div>
      <div data-aos="zoom-out-up" data-aos-duration="600" className="relative w-full sm:w-[300px]">
        <video className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg" controls>
          <source src={Client2} type="video/mp4" />
        </video>
        <img
          src={Logo}
          alt="logo"
          className="w-[70px excursion-logo sm:w-[100px] h-[40px] sm:h-[58px] absolute bottom-[200px] sm:bottom-[370px] right-[20px] sm:right-[230px]"
        />
      </div>
      <div data-aos="zoom-out-up" data-aos-duration="600" className="relative w-full sm:w-[300px]">
        <video className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg" controls>
          <source src={Client3} type="video/mp4" />
        </video>
        <img
          src={Logo}
          alt="logo"
          className="w-[70px] sm:w-[100px] h-[40px] sm:h-[58px] absolute bottom-[200px] sm:bottom-[370px] right-[20px] excursion-logo sm:right-[230px]"
        />
      </div>
    </div>
  </div>
</section>

<section className="priorities w-full text-center mb-[200px] mt-[70px]">
  <div data-aos="fade-down">
    <h2 className="pt-[77px] text-[40px] md:text-[55px] text-white font-semibold">
      {t("Priorities")}
    </h2>
    <div className="w-[48px] h-[4px] bg-[#FF0000] mx-auto"></div>
    <div className="pt-[15px] text-white max-w-[934px] text-[14px] md:text-[17px] font-semibold mx-auto">
      <p>{t("Priorities_text")}</p>
    </div>
  </div>

  <div
    data-aos="fade-up"
    className="max-w-[1260px] flex flex-wrap justify-center mx-auto mt-[80px] text-white gap-[50px]"
  >
    {[
      { image: Prioritet1, text: t("Priorities1") },
      { image: Prioritet2, text: t("Priorities2") },
      { image: Prioritet3, text: t("Priorities3") },
      { image: Prioritet4, text: t("Priorities4") },
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center gap-[10px] text-[16px] md:text-[18px] font-semibold">
        <img src={item.image} alt={`Prioritet${index + 1}`} className="w-[100px] md:w-[135px] h-[100px] md:h-[135px]" />
        <p>{item.text}</p>
      </div>
    ))}
  </div>

  <div className="mt-[100px] relative max-w-[975px] time text-white mx-auto rounded-[25px]">
    <div data-aos="fade-up">
      <h2 className="pt-[52px] text-[40px] md:text-[50px] font-semibold">
        {t("We in Numbers")}
      </h2>
      <div className="w-[48px] h-[4px]  bg-white flex justify-center mx-auto"></div>
      <div className="flex flex-wrap justify-center md:justify-around gap-[20px] mt-[20px]">
        {[
          { value: 7320, text: t("Issued Visas") },
          { value: 7257, text: t("Successful Trips") },
          { value: 7250, text: t("Satisfied Clients") },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              data-aos="zoom-in"
              className="text-[60px] md:text-[100px] font-semibold"
            >
              <SlotCounter value={item.value} />
            </div>
            <p className="text-[16px] md:text-[20px] font-semibold">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        <section data-aos="zoom-in" id="services" className="max-w-[1200px] services mx-auto mb-[80px]">
          <BasicTabs />
        </section>
        <section className="travels max-h-[960px] max-w-[screen] bg-black">
          <div className="max-w-[1300px] mx-auto">
            <TravelsSwiper />
          </div>
        </section>
      </main>
      <footer id="contact" className="w-screen h-auto bg-black pt-[50px]">
  <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-[20px] md:gap-[85px] pb-[50px]">
    <div className="flex flex-col text-white md:flex-1 contact-mobile">
      <div data-aos="fade-right" className="flex flex-col relative">
        <h2 className="text-[36px] md:text-[48px] font-semibold">{t("contact")}</h2>
        <span className="top-[70px] w-[48px] h-[5px] absolute bg-[#FF0000]"></span>
      </div>
      <h3 className="mt-[35px]">{t("For Contact")}:</h3>
      <a href="tel:+998997126666" className="mt-[15px]">
        +998 99 712 66 66
      </a>
      <a href="tel:+998974839999">+998 97 483 99 99</a>
      <div className="flex gap-[20px] flex-col mt-[35px]">
        <h3>{t("Social media")}</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/easy.visa.uzb/?igsh=aXI4bG9mMm5sczZ3&utm_source=qr"
          className="flex gap-[5px] hover:text-red-500"
        >
          <img src={Instagram} alt="Instagram" className="w-[30px] h-[30px]" />
          easy.visa.uzb
        </a>
        <div className="flex items-center gap-[5px]">
          <img src={Telegram} alt="Telegram" className="w-[30px] h-[30px]" />
          <div className="flex flex-col">
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/Ataev_Bakhodir90">
              t.me/Ataev_Bakhodir90
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/sevaraataeva1986">
              t.me/sevaraataeva1986
            </a>
          </div>
        </div>
        <a
          href="https://t.me/easyvizatourconsulting"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[5px] hover:text-red-500"
        >
          <img src={Group} alt="Group" className="w-[35px] h-[35px]" />
          Telegram
        </a>
        <div className="flex items-center gap-[5px] hover:text-red-500">
          <img src={Location} alt="Location" className="w-[35px] h-[35px]" />
          Tashkent, Mustaqillik 59.
        </div>
      </div>
    </div>
    
    <div className="md:flex-1 contact-map">
      <iframe
        className="rounded-md w-full h-[300px] md:h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.12897814137!2d69.67134522515748!3d41.151268931814066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afb2d4577a4a75%3A0x79d9d2c0e3535831!2z0YPQuy4g0JzRg9GB0YLQsNC60LjQu9C70LjQuiA1OSwgMTEwMjI2LCDQmtGA0LDRgdC90L7Qs9C-0YDRgdC6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1728709767193!5m2!1sru!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
    <div className="md:flex-1">
      <h2 className="text-[32px] md:text-[38px] text-white font-semibold text-center">
        {t("submit")}
      </h2>
      <form onSubmit={SendMessage} className="mt-[20px]">
        <div className="flex flex-col gap-[24px] w-[350px] mx-auto">
          <input
            type="text"
            required
            name="name"
            placeholder={t("Name")}
            className="h-[44px] text-[#D5192F] caret-red-500 outline-none px-[20px] w-full rounded-md"
          />
          <input
            type="text"
            required
            name="surname"
            placeholder={t("Surname")}
            className="h-[44px] text-[#D5192F] outline-none caret-red-500 px-[20px] w-full rounded-md"
          />
          <input
            type="number"
            required
            name="phone"
            min={11}
            placeholder={t("Telephone")}
            className="h-[44px] caret-red-500 outline-none text-[#D5192F] px-[20px] w-full rounded-md"
          />
          <textarea
            type="text"
            required
            placeholder={t("Comments")}
            name="comment"
            className="h-[175px] text-[#D5192F] caret-red-500 outline-none pt-[10px] px-[20px] w-full rounded-md"
          />
          <button
            className="bg-[#D5192F] text-white py-[10px] rounded-md"
            type="submit"
          >
            {t("request")}
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
