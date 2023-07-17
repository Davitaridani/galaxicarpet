"use client";

import { useEffect } from "react";
import AOS from "aos";
import styles from "../Home.module.css";

const Herro = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`${styles.bgHero}`}>
      <div className="container d-align-items-center">
        <div className="f-row d-align-items-center">
          <div className="xl:basis-[57%] md:w-4/5 xl:ps-7 ps-4">
            <h1
              className="xl:text-[45px] md:text-[28px] text-[27px] text-white font-bold mb-9 leading-tight"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Commercial Grade Custom Carpets, Floorings & Furnitures For Office
              Towers, Shops, Homes With Exceptional Designs Suitable To Today’s
              Requirements
            </h1>
            <div className="flex xl:gap-6 gap-4">
              <span
                className="border-t-2 border-[#bfbfc0] xl:w-[350px] md:w-[220px] w-[100px] ms-1"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="300"
              />
              <p
                className="text-[#bfbfc0] md:text-[21px] text-xl -mt-3"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                We take carpet and flooring supply and installation at the new
                heights which no one ever climb to. We are the best contractor
                and consultant that are committed to providing our customers
                with the highest quality carpet and flooring solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herro;
