"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import Herro from "./section/Herro";
import Link from "next/link";
import { iconHome, cardHome } from "../utils/constants";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import styles from "./Home.module.css";
import BtnLink from "../components/UI/BtnLink";
import Consultan from "../components/Consultan";
import { galaxiProject } from "../utils/constants";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hospitality");

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = galaxiProject.filter((item) => {
    if (selectedCategory === "Hospitality") {
      return item.category === selectedCategory;
    } else if (selectedCategory === "Healthcare") {
      return item.category === selectedCategory;
    } else if (selectedCategory === "Residential") {
      return item.category === selectedCategory;
    } else if (selectedCategory === "Sports / Entertainment") {
      return item.category === selectedCategory;
    } else if (selectedCategory === "Office Space") {
      return item.category === selectedCategory;
    } else if (selectedCategory === "Retail Shop") {
      return item.category === selectedCategory;
    } else {
      return true;
    }
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Herro />

      <section className="bg-black xl:pt-20 xl:pb-[70px] py-16 px-5">
        <div className="container">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 xl:gap-[70px] md:gap-5 px-9">
            {iconHome?.map((item, i) => (
              <div key={i}>
                <Image
                  src={item.icon}
                  alt="icon"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="md:mb-7 mb-5 md:mx-0 mx-auto lg:w-auto w-[50px]"
                />
                <p className="text-white md:text-xl text-lg  md:text-left text-center md:wato md:mx-0 mx-auto">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="xl:pb-[240px] md:pb-16 pb-10">
        <div className="container overflow-hidden">
          <div className="xl:pt-[140px] pt-16 xl:mb-[65px] md:mb-8 mb-12">
            <p
              className="color-[#888] text-[26px]"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Commercial Grade Carpets, Floorings & Furniture
            </p>
            <h1
              className="md:text-[27px] xl:text-5xl"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              Successful Luxurious Interiors Are{" "}
              <br className="hidden md:block " /> Defined By Quality Furnishings
            </h1>
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            {cardHome.map((item, i) => (
              <div
                className="md:basis-1/3 basis-1/2 md:px-0 px-3 md:mb-0 mb-5"
                key={i}
              >
                <Image
                  src={item.imgUrl}
                  alt="card"
                  className="xl:mb-[65px] md:mb-4 mb-4 xl:pe-3 pe-0"
                  data-aos={item.aos}
                  data-aos-duration="2000"
                  data-aos-offset="300"
                />
                <div className="ps-4">
                  <h3
                    className="font-bold xl:text-3xl text-[22px] xl:mb-4 mb-1"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#737373] xl:mb-8 mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                  >
                    {item.description}
                  </p>
                  <Link href="/products" className="text-2xl text-black">
                    <span
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-offset="100"
                    >
                      {item.iconArrow}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="xl:pb-52 pb-16">
        <div className="container">
          <h1 className="xl:mb-16 mb-2">Galaxi Carpet Projects</h1>
          <div className="flex xl:flex-row flex-col">
            <div className="md:basis-1/4 bais-1 xl:space-y-8 space-y-3 xl:mb-0 mb-12">
              {galaxiProject?.map((item) => (
                <ul key={item.id}>
                  <li className="xl:text-[22px] md:text-[19px] text-base text-[#949494] font-bold mt-4">
                    <button
                      className={
                        selectedCategory === item.category ? "text-black" : ""
                      }
                      onClick={() => handleChangeCategory(item.category)}
                    >
                      {item.category}
                    </button>
                  </li>
                </ul>
              ))}
            </div>

            {filteredData.map((item) => (
              <div className="md:flex bg-[#e5e5e5] xl:basis-3/4" key={item.id}>
                <div className="xl:basis-auto md:basis-1/2 md:flex block items-center">
                  <div
                    className="md:flex items-center"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <Image src={item.imgUrl} alt="image category" />
                  </div>
                </div>
                <div className="flex items-center overflow-hidden">
                  <div className="xl:ps-16 md:ps-10 ps-3 md:m-0 m-10 xl:space-y-5 space-y-3">
                    {item.details?.map((item, i) => (
                      <ul className="list-disc marker:text-[#727272]" key={i}>
                        <li
                          className="text-[#444]"
                          data-aos="fade-right"
                          data-aos-duration="2000"
                        >
                          {item.text}
                        </li>
                      </ul>
                    ))}
                    <Link
                      href=""
                      className="d-align-items-center xl:gap-3 gap-2 font-bold text-[#646464] xl:text-lg text-base md:pt-7 pt-4 -ml-3"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      View Project Gallery{" "}
                      <span className="pt-1 text-xl text-black">
                        <HiOutlineArrowSmRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.bgCover}>
        <div className="container">
          <div className="flex flex-row">
            <div className="md:basis-1/2 d-align-items-center">
              <div className="">
                <span className="xl:text-[26px] text-[19px] text-[#888]">
                  Services & Maintenance
                </span>
                <h1 className="xl:mb-6 mb-4">
                  Committed For Product Longevity
                </h1>
                <p className="tetxt-[#4a4a4a] xl:mb-11 mb-8 w-[85%]">
                  In order to withstand the most demanding conditions and usage,
                  Galaxi Carpet fully committed for service to maintain your
                  premises’ furnishings such as carpetss, floorings and
                  furnitures at their best condition.
                </p>
                <BtnLink
                  content="View Service & Maintenance"
                  icon={<HiOutlineArrowSmRight />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Consultan />
      </section>
    </>
  );
};

export default Home;
