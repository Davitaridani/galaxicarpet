import React from "react";
import ListData from "../components/ListData";
import { dataProducts } from "../utils/constants";
import Consultan from "../components/Consultan";

const Products = () => {
  return (
    <>
      <section className="title__section xl:pb-[120px]">
        <div className="container">
          <div className="text-center xl:w-[64%] md:w-4/5 w-auto mx-auto md:mb-[75px] mb-16">
            <h1 className="md:mb-4 md:text-[27px] mb-3 xl:text-[45px]">
              Galaxi Carpet Products
            </h1>
            <span className="block text-lightGray xl:text-[21px] text-[18px] mb-2">
              Browse through our exquisite collection of carpets that will
              elevate the aesthetics and comfort of any space, here we also
              showcase our collections of floorings and furntiures.
            </span>
            <p className="text-lightGray">
              Galaxi Carpet products always came with a passion for quality and
              a commitment to excellence, we offer a diverse range of unique
              style and design preferences. You can always contact us to find
              the right products that suit your needs.
            </p>
          </div>
          <ListData data={dataProducts} />
        </div>
      </section>

      <Consultan />
    </>
  );
};

export default Products;
