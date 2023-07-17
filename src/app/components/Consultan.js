import Image from "next/image";
import { home_asset } from "@/assets/images";
import Link from "next/link";

const Consultan = () => {
  return (
    <section className="bg-[#d4d4d4] md:pt-24 py-16 xl:pb-[110px] ">
      <div className="container">
        <div className="flex md:flex-row flex-col">
          <div className="md:basis-[24%] basis-auto">
            <Image
              src={home_asset.logoHeadLeads}
              alt="logo"
              className="md:mb-0 mb-4 xl:w-auto md:w-[80%] w-[40%]"
            />
          </div>
          <div className="md:basis-[51%] basis-9/12 md:-ms-2 md:mb-0 mb-8">
            <div className="">
              <h1 className="lg:text-5xl md:text-[27px] lg:mb-5 mb-3">
                Speak With Our Consultant
              </h1>
              <p className="text-[#888] md:text-2xl text-lg">
                Have a question about custom carpets, floorings and furnitures?
                We’ll help you find the right products & solutions.
              </p>
            </div>
          </div>
          <div className="md:basis-[24%] basis-auto lg:ps-[90px] ps-0">
            <Link
              href={"/contact"}
              className="bg-red lg:py-5 lg:px-10 py-3 px-6 text-white tracking-wide inline-block text-[15px]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultan;
