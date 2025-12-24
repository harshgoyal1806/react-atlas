import React from "react";
import footerContact from "../../api/footerApi";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <footer className="my-8">
      <div className="flex flex-wrap gap-4 px-4 bg-[#131212] justify-around">
        {footerContact.map((currData, index) => (
          <div
            key={currData.title}
            className="flex justify-between gap-3 p-4 "
          >
            <div className="m-auto text-2xl text-blue-700">
              {footerIcon[currData.icon]}
            </div>
            <div>
              <p className="font-semibold">{currData.title}</p>
              <p className="text-sm text-gray-400">{currData.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-[#202020] text-center">
        Copyright &copy; 2025 All right Reserved <span className="text-blue-700">Harsh Goyal</span>
      </div>
    </footer>
  );
};

export default Footer;
