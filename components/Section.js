import React from "react";

function Section() {
  return (
    <div className="bg-white p-5  ">
      <div className="flex ">
        <p className="py-10	mx-auto">
          Kuch b likh lo Kuch b likh lo Kuch b likh lo{" "}
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-6/12 mx-1 ">
          <p className="font-bold text-[60px] leading-tight py-0 my-0">
            
            <span className="text-[32px]">A RESOLUTIONARY PLATFORM </span>
            <br /> <span className="text-[40px]">ENTRIES -SELLERS</span>
            <br /> WORLDWIDE
          </p>
        </div>
        <div className="w-6/12 ml-20 "><img src="/preview.png" className="w-80 h-80" /></div>
      </div>
    </div>
  );
}

export default Section;
