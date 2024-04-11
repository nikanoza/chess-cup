import { Link } from "react-router-dom";
import landing from "../assets/lending.png";
import logo from "../assets/logo.svg";
const Landing = () => {
  return (
    <div className="w-full min-h-screen flex justify-between">
      <div className="w-[45%]">
        <div className="bg-violet py-6 pl-14 absolute w-[45%]">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </div>
        <img src={landing} alt="landingBackground" />
      </div>
      <div className="w-[55%] bg-bgRed">
        <div className="mt-[265px] pl-20">
          <div className="flex flex-row items-center gap-6">
            <h1 className="text-[80px] font-extrabold text-white nunito uppercase">
              chess says
            </h1>
            <span className="font-bold text-[#212529] uppercase nunito text-xl">
              a lot about
            </span>
          </div>
          <h1 className="text-[80px] font-extrabold text-white nunito uppercase">
            who we are
          </h1>
          <Link to={"/personal"}>
            <button className="mt-[102px] bg-[#212529] text-white py-[13px] px-6 rounded-lg">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
