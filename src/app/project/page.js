"use client";
import Image from "next/image";
import { dataProjects } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Consultan from "../components/Consultan";

const Project = () => {
  return (
    <>
      <section className="title__section xl:pb-[120px] md:pb-3">
        <div className="container">
          <div className="xl:w-[60%] md:w-4/5 title-center xl:mb-[73px] mb-14">
            <h1 className="mb-4 xl:text-[45px] md:text-[27px]">
              Galaxi Carpet Projects
            </h1>
            <span className="text-lightGray xl:text-[21px] text-[18px] xl:leading-8 leading-7 mb-2 block">
              We proudly showcase a selection of our noteworthy projects where
              our carpets have transformed spaces into stunning, comfortable,
              and stylish environments.
            </span>
            <p className="text-lightGray">
              As a leading provider of high-quality carpets, we have had the
              privilege of collaborating with esteemed clients across various
              industries, including residential, commercial, hospitality, and
              more. Our commitment to excellence, innovative designs, and
              superior craftsmanship have made us the preferred choice for
              architects, interior designers, and homeowners alike. Click on
              each thumbnails below to view project gallery.
            </p>
          </div>
          {dataProjects?.map((item, i) => (
            <div className="" key={i}>
              <h3 className="text-center md:text-[22px] text-xl font-bold md:mb-9 mb-5">
                {item.title}
              </h3>
              <Swiper
                spaceBetween={10}
                speed={1000}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  "@1.50": {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {item.card?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="md:mx-auto mx-3">
                      <Image
                        src={item.imgUrl}
                        alt="project"
                        className="mb-4 w-full"
                      />
                      <div className="md:h-28 h-24">
                        <h3 className="text-[17px] text-lightBlack font-semibold leading-5">
                          {item.title}
                        </h3>
                        <p className="text-lightBlack">{item.location}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <hr className="xl:mb-12 xl:mt-7 mb-11 mt-5 border-t border-[#ccc] line-horizontal" />
            </div>
          ))}
        </div>
      </section>

      <Consultan />
    </>
  );
};

export default Project;
