"use client";

import { dataServices } from "../utils/constants";
import ListData from "../components/ListData";
import Consultan from "../components/Consultan";

const Services = () => {
  return (
    <>
      <section className="title__section lg:pb-[120px]">
        <div className="container">
          <div className="text-center xl:w-[63%] md:w-4/5 w-auto mx-auto md:mb-[75px] mb-14">
            <h1 className="mb-4 xl:text-[45px] md:text-[27px]">
              Galaxi Carpet Service & Maintenance
            </h1>
            <span className="text-lightGray md:text-[21px] text-[18px] md:leading-8 leading-7 md:mb-2 mb-3 block">
              Beside providing exceptional carpets and floorings, we also offer
              a range of services and maintenance solutions to ensure your
              products longevity and pristine condition.
            </span>
            <p className="md:text-[17px] text-base text-lightGray leading-[1.5]">
              Galaxi Carpet team of skilled professionals is dedicated to
              delivering top-notch service and exceeding your expectations.
              Trust us to handle all your installation, repair, cleaning, and
              maintenance needs with utmost care and expertise. We are open to
              offer these services to all customers without exclusivity and
              limitations.
            </p>
          </div>

          <div className="">
            <ListData data={dataServices} />
          </div>
        </div>
      </section>

      <Consultan />
    </>
  );
};

export default Services;
