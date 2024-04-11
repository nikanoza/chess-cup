import pieces from "../assets/pieces.png";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const PersonalBanner = () => {
  return (
    <div className="w-[45%]">
      <div className="bg-violet py-6 pl-14">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="cursor-pointer " />
        </Link>
      </div>
      <div className="relative">
        <img src={pieces} alt="" className="w-full h-screen object-cover" />
        <div className="flex flex-col absolute top-[211px] left-[132px] italic nunito w-[423px] uppercase gap-6">
          <h2 className="italic text-[#212529] text-[26px] font-extrabold">
            “When you see a good move, look for a better one.”
          </h2>
          <span className="text-[#E5E6E8] font-medium italic text-2xl">
            -Emanuel Lasker
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalBanner;
