import React from "react";
import Link from "next/link";

const ContactOffice = () => {
  const dataContacts = [
    { title: "Phone.", contact: "+62 31-52402339" },
    { title: "Email.", contact: "info@galaxicarpet.com" },
    { title: "Whatsapp", contact: "+62 813-3383-3333" },
  ];

  return (
    <>
      <div className="flex__column mb-4">
        <div className="xl:basis-[55%] xl:mb-0 mb-3">
          <h3 className="xl:text-[19px] text-lg font-bold">
            Showroom & Office Gallery
          </h3>
          <p className="text-darkGray3 mb-0 xl:pe-28 pe-4">
            Surabaya <br /> Galaxi Carpet At Graha Natura Jl. Graha Natura
            No.BS-56 Surabaya, Jawa Timur 60216
          </p>
        </div>
        <div className="flex-row flex items-end gap-4">
          <ul className="basis-[20%]">
            {dataContacts.map((item, i) => (
              <li key={i}>
                <span className="text-darkGray3">{item.title}</span>
              </li>
            ))}
          </ul>
          <ul className="basis-[20%]">
            {dataContacts.map((item, i) => (
              <li key={i}>
                <Link href={""} className="text-darkGray3">
                  {item.contact}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="xl:text-[19px] text-lg font-bold">
        Carpet Manufacturing Factory
      </h3>

      <div className="flex xl:flex-row flex-col mb-4">
        <div className="md:basis-[55%]">
          <ul>
            <li>
              <p className="text-darkGray3 mb-0 pe-28">Bandung</p>
            </li>
          </ul>
        </div>
        <div className="flex-row flex items-end gap-4">
          <ul className="basis-auto">
            <p>Whatsapp</p>
          </ul>
          <ul className="basis-auto">
            <li>
              <Link href={""} className="text-darkGray3">
                +62 813-3383-3333
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactOffice;
