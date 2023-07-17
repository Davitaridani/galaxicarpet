"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { title, imgUrl, description, link, iconArrow } = item;

  return (
    <div className="md:basis-1/2 basis-auto flex">
      <div className="mb-5 md:flex items-center overflow-hidden">
        <Image
          src={imgUrl}
          alt="card"
          className="md:w-[48%] md:h-full md:object-cover"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
        />
        <div
          className="flex items-center md:h-full h-auto bg-darkGray"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <div className="xl:ps-[75px] ps-6 xl:pe-[110px] pe-7 py-7">
            <h3 className="lg:mb-3 mb-[6px] font-bold">{title}</h3>
            <p className="text-darkGray2 text-[17px] lg:mb-9  mb-5">
              {description}
            </p>
            <Link
              href=""
              className="d-align-items-center font-semibold text-[#646464] xl:text-lg md:text-[17px] text-[15px] gap-2"
            >
              {link}{" "}
              <span className="leading-none font-bold text-black pt-1 md:text-2xl text-xl">
                {iconArrow}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
