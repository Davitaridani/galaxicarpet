import React from "react";

const Input = ({ placeholder, type }) => {
  return (
    <div className="mb-3">
      <input
        type={type}
        className="bg-[#f2f2f2] border-2 border-[#ccc] text-[17px]  block w-full h-[40px] dark:placeholder-[#bebebe] md:ps-6 ps-4"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
