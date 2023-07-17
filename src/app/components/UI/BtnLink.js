import Link from "next/link";

const BtnLink = ({ content, icon }) => {
  return (
    <>
      <Link
        href=""
        className="d-align-items-center font-semibold text-[#646464] xl:text-lg text-base gap-3 "
      >
        {content}
        <span className="leading-none text-black pt-1 xl:text-2xl text-[20px]">
          {icon}
        </span>
      </Link>
    </>
  );
};

export default BtnLink;
