import ContactOffice from "../components/ContactOffice";
import { contact_asset } from "@/assets/images/";
import Image from "next/image";
import Link from "next/link";
import Input from "../components/UI/Input";

const Contact = () => {
  const dataChekBox = [
    { text: "Find a local distributor" },
    { text: "Find General inquiry" },
    { text: "Contact support" },
    { text: "Request specifications" },
    { text: "Talk with a product expert" },
  ];

  return (
    <section className="">
      <div className="container">
        <div className="flex md:flex-row flex-col md:ps-[21px] md:pe-[31px] md:gap-6 xl:gap-[75px] gap-0">
          <div className="md:basis-1/2 basis-auto xl:pt-[130px] py-16 md:pt-12 md:pb-[135px]">
            <h1 className="xl:mb-4 mb-3 md:text-[27px] xl:text-[45px]">
              Galaxi Carpet Serve Nationwide
            </h1>
            <p className="xl:mb-6 mb-4 md:text-[21px] text-lg text-lightGray">
              Are you a business or home owners? Or architect / interior project
              contractor looking to source Galaxi Carpet for your next project?
              Call us now.
            </p>
            <ContactOffice />
            <div className="md:px-0 md:pt-7">
              <Image
                src={contact_asset.imgContact}
                alt="contact"
                className="mb-4"
              />
              <p>Galaxi Carpet Showroom & Office Surabaya</p>
              <Link
                href="#"
                className="font-semibold text-darkGray3 underline decoration-2"
              >
                Click To View On Google Map
              </Link>
            </div>
          </div>

          <div className="md:basis-1/2 basis-auto bg-[#f2f2f2] xl:pt-[130px] py-12 xl:ps-14 xl:pe-[75px] px-4 md:ps-7">
            <h1 className="xl:mb-4 mb-3 md:text-[27px] xl:text-[45px]">
              Inquire Now With Our Online Form
            </h1>
            <p className="md:text-[21px] text-lg text-lightGray ">
              Let us know the reasons you're reaching out so we can get you the
              information you need, from the right expert / consultant within
              the short period.
            </p>
            <hr className="text-lightGray border-[1.5px] xl:my-9 my-7" />
            <h3 className="text-[21px] mb-5 font-semibold leading-none">
              Inquiry Topic
            </h3>
            {dataChekBox?.map((item, index) => (
              <div className="" key={index}>
                <label className="flex items-center gap-4 space-y-1">
                  <input
                    type="checkbox"
                    value=""
                    className="xl:w-6 xl:h-6 w-5 h-5 accent-zinc-900 bg-slate-600"
                  />
                  <span className="text-lightGray xl:text-[21px] text-lg">
                    {item.text}
                  </span>
                </label>
              </div>
            ))}
            <hr className="text-lightGray border-[1.5px] my-8" />
            <div className="item-form">
              <h3 className="text-[21px] xl:mb-7 mb-5 font-semibold">
                Your Information
              </h3>
              <form action="">
                <Input placeholder="Full Name" type="text" />
                <Input placeholder="Company" type="text" />
                <Input placeholder="Mobile Phone" type="number" />
                <Input placeholder="Email" type="email" />
                <div className="mb-4">
                  <textarea
                    rows="4"
                    className="bg-[#f2f2f2] border-2 border-[#ccc] text-[17px]  block w-full h-[174px] dark:placeholder-[#bebebe] md:ps-6 ps-4 pt-1"
                    placeholder="Project Details"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red xl:py-5 xl:px-10 md:py-4 py-3 px-6 text-white tracking-wide md:text-[15px] text-sm"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
