import Image from "next/image";
import Link from "next/link";
import { roboto } from "../../utils/fonts";
import { dataFooter } from "../../utils/constants";
import { home_asset } from "@/assets/images";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container relative">
        <div className="flex md:flex-row flex-col lg:px-20 px-0 lg:gap-10 md:gap-4 gap-6 lg:pt-[70px] pt-20 pb-[93px] md:px-4 md:py-16">
          <div className="lg:basis-1/2 md:basis-1/4 ">
            <div className="lg:w-3/4 md:w-auto">
              <h3 className="text-lg font-bold md:mb-2 mb-1">
                Showroom & Office
              </h3>
              <p className="text-white md:text-[15px] ">
                Galaxi Carpet At Graha Natura Jl. Graha Natura No.BS-56
                Surabaya, Jawa Timur 60216
              </p>
            </div>
          </div>
          {dataFooter?.map((item) => (
            <div className="lg:basis-1/2 md:basis-1/4">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              {item.navLinks.map((link) => (
                <ul>
                  <li className="text-white text-[15px] leading-relaxed">
                    <Link href={"#"}>{link.name}</Link>
                  </li>
                </ul>
              ))}
            </div>
          ))}
          <div className="lg:basis-1/2 md:basis-1/4">
            <Image
              src={home_asset.logoFooter}
              alt="icon"
              className="lg:w-auto md:w-full w-[57%]"
            />
          </div>
        </div>

        <div className="flex justify-between md:pb-11 pb-9">
          <span
            className={`${roboto.className} text-white md:text-[13px] text-xs leading-relaxed`}
          >
            Copyright - PT. Galaxi Anugerah Carpetindo © 2023.
          </span>
          <span
            className={`${roboto.className} text-[#a6a6a6] md:text-[13px] text-xs text-end md:text-start leading-relaxed`}
          >
            Website design by Mark Design Indonesia.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
