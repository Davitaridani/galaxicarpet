"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { dataAbout } from "../utils/constants";
import { textAbout } from "../utils/constants";
import { about_asset } from "@/assets/images";
import Consultan from "../components/Consultan";
import ContactOffice from "../components/ContactOffice";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="xl:pt-[130px] xl:pb-[140px] py-16">
        <div className="container overflow-hidden">
          <div className="flex__column">
            <div className="lg:basis-1/2 basis-auto d-align-items-center">
              <div className="w-auto md:w-[80%] md:mx-auto md:text-center lg:w-[90%] xl:mb-0 mb-8">
                <h1
                  className="font-bold md:mb-5 mb-4 lg:text-[45px] xl:text-left md:text-[27px]"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  About Galaxi Carpet
                </h1>
                <p
                  className="text-lightGray text-[21px] lg:text-left"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  We are a leading provider in the carpet industry, offering
                  high-quality carpets, wooden flooring, vinyl flooring and
                  custom furniture solutions for homes, offices, hotels, and
                  other commercial projects. At Galaxi Carpet, we take pride in
                  delivering a collection of carpets and other products that
                  combine superior quality, innovative design, and excellent
                  customer service.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <Image
                src={about_asset.imgAbout}
                alt="about"
                className="md:px-0 px-3 md:mx-auto md:w-4/5 xl:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="xl:pb-[114px] pb-16">
        <div className="container">
          <div className="xl:w-[63%] md:w-4/5 w-auto mx-auto">
            <h1 className="text-center lg:mb-7 mb-5 lg:text-[45px] md:text-[27px]">
              Galaxi Carpet Four Pillars Of Strength
            </h1>
            <p className="text-lg md:text-[21px] text-center">
              Building & business owners today are looking for carpet, flooring
              and furniture products that are produced to fit the property
              perfectly, exacting specifications and able to be supplied within
              budget constraints as well as longevity. Galaxi Carpet are
              specialised in custom precision-made with high-quality standards
              that provide an exceptionally long service life. Galaxi Carpets
              products are built to last.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 xl:gap-8 md:gap-3">
            {dataAbout?.map((item, i) => (
              <div className="" key={i}>
                <div className="card xl:mb-0 mb-8">
                  <Image
                    src={item.imgUrl}
                    alt="icon service"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    className="mb-3 md:mb-9 mx-auto md:mx-0 md:text-start w-[50px] md:w-[20%] lg:w-auto"
                  />
                  <div className="text-center md:text-left">
                    <h5 className="text-lg xl:text-[21px] md:mb-2 mb-1">
                      {item.title}
                    </h5>
                    <p className="text-lightBlack">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-10">
        <div className="xl:mb-[60px] xl:mt-[70px] xl:my-14 md:my-10 my-9 border-t border-[#ccc]" />
      </div>

      <section className="xl:pb-28 pb-16 ">
        <div className="container">
          <div className="flex md:flex-row flex-col xl:gap-10 gap-8">
            <div className="md:basis-1/2">
              <h1 className="lg:mb-9 md:mb-6 mb-5 md:text-[27px]">
                Why Galaxi Carpet
              </h1>
              <p className="mb-4 text-darkGray3">
                Here are the reasons why we are the preferred choice for
                customers seeking the perfect carpet for their offices / retail
                shops / homes:
              </p>
              {textAbout.map((item, i) => (
                <div className="md:mb-3 mb-4" key={i}>
                  <h5 className="text-[17px] font-normal">{item.title}</h5>
                  <p className="text-darkGray3 font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:basis-1/2">
              <h1 className="xl:mb-12 mb-8 md:text-[27px]">
                Showroom & Office Gallery
              </h1>
              <div className="flex md:gap-5 gap-3 mb-5 overflow-hidden">
                <Image
                  src={about_asset.imgShowroom1}
                  alt="profile"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="200"
                />
                <Image
                  src={about_asset.imgShowroom2}
                  alt="profile"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="200"
                />
              </div>
              <p className="text-darkGray3">
                We welcome all future and existing customers to experience and
                proof everything that Galaxi Carpet has stated. Book your
                consultation session at our showroom or schedule a visit to our
                manufacturing factory to witness high-quality products being
                presented. We are committed to continuously delivering
                exceptional furnishing experiences for our customers.
              </p>
              <p className="py-4 text-darkGray3">
                Contact us today for more information and firsthand experience
                with our products.
              </p>

              <ContactOffice />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <Image
          src={about_asset.imgAboutBtm}
          alt="bg-cover"
          className="w-full"
        />
      </section>

      <Consultan />
    </>
  );
};

export default About;
