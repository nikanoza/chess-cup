import { InputMask } from "@react-input/mask";
import { ArrowRight } from "../svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalInfoSchema } from "../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  tel: string;
  date: string;
}

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(personalInfoSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async () => {
    toast.success("Everything is okay");
    navigate("/experience");
  };

  useEffect(() => {
    Object.values(errors).forEach((error) => {
      if (error) {
        toast.error(error.message);
      }
    });
  }, [errors]);

  return (
    <div className="w-[55%] open-sans">
      <ToastContainer />
      <div className="py-6 pl-12">
        <h2 className="text-[#212529] font-semibold">
          Start creating your account
        </h2>
      </div>
      <hr />
      <div className="pt-[60px] pl-12 flex flex-row items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="bg-[#def5e8] w-10 h-10 flex justify-center items-center font-bold text-lg text-[#212529] rounded-md">
            1
          </h1>
          <p className="text-[#000000] font-semibold">Personal information</p>
        </div>
        <div className="w-[174px]">
          <hr className="mb-4" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="bg-[#F5F5F5] w-10 h-10 flex justify-center items-center font-bold text-lg text-[#212529] rounded-md">
            2
          </h1>
          <p className="text-[#000000] font-semibold">Chess experience</p>
        </div>
      </div>
      {/* Info */}
      <div className="pl-12 mt-28">
        <div className="flex flex-col gap-1">
          <h1 className="text-[32px] font-semibold">Personal information</h1>
          <p className="font-semibold text-[#95939A] text-sm">
            This is basic informaton fields
          </p>
        </div>
        {/* Inputs */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 mt-[85px] max-w-[775px]"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className={`placeholder:text-[#212529] placeholder:text-xl px-4 py-3 border-b-[1px] 
            rounded-md outline-none focus:bg-[#E9ECEF] focus:border-gray-400 ${
              errors.name && "text-[#DC3545] bg-[#FFEFEF] "
            }`}
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className={`placeholder:text-[#212529] text-xl placeholder:text-xl px-4 py-3 border-b-[1px] 
            rounded-md outline-none focus:bg-[#E9ECEF] focus:border-gray-400 ${
              errors.email && "text-[#DC3545] bg-[#FFEFEF]"
            }`}
          />
          <input
            {...register("tel")}
            type="tel"
            placeholder="Phone number"
            className={`placeholder:text-[#212529] placeholder:text-xl px-4 py-3 border-b-[1px] 
            rounded-md outline-none focus:bg-[#E9ECEF] focus:border-gray-400 ${
              errors.tel && "text-[#DC3545] bg-[#FFEFEF]"
            }`}
          />
          <InputMask
            {...register("date")}
            placeholder="Date of birth"
            mask="dd.mm.yyyy"
            replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
            className={`placeholder:text-[#212529] placeholder:text-xl px-4 py-3 border-b-[1px] 
            rounded-md outline-none focus:bg-[#E9ECEF] focus:border-gray-400 ${
              errors.date && "text-[#DC3545] bg-[#FFEFEF]"
            }`}
            separate
          />
          <div className="mt-[88px] flex flex-row items-center justify-between">
            <Link to={"/"}>
              <button className="text-[#212529] py-3 px-6 bg-transparent border-[1px] border-[#212529] rounded-md text-xl">
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="flex flex-row items-center gap-3 text-white py-3 px-6 bg-[#212529] border-[1px] border-[#212529] rounded-md text-xl"
            >
              Next
              <ArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
