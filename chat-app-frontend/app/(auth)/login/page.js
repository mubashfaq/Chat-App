"use client";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Gradient Circles */}
      <div className="absolute -top-28 -left-18 sm:10 xl:left-28 2xl:left-36 w-[200px] sm:w-[254px] h-[200px] sm:h-[254px] rounded-full pointer-events-none bg-[radial-gradient(79.98%_79.98%_at_74.58%_16.62%,#E46BBB_0%,#EB78BD_29.89%,#B72EB2_73.63%,#81249A_100%)]"></div>

      <div className="absolute top-10 -right-20 xl:right-28 2xl:right-36 w-[120px] sm:w-[137px] h-[120px] sm:h-[137px] rounded-full pointer-events-none bg-[radial-gradient(84.4%_84.4%_at_27.78%_24.07%,_#646464_0%,_#292929_60.46%,_#0F0F0F_79.62%,_#1B1B1B_100%)]"></div>

      {/* Login Box */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-transparent p-6 sm:p-8 rounded-2xl text-center">
        <h2 className="mx-auto w-fit text-white text-center font-poppins text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-normal mb-8">
          Sign In.
        </h2>

        {/* Social Buttons */}
        <button className="flex items-center justify-center gap-2 w-full max-w-[481px] mx-auto h-[55px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] mb-4">
          <FaGoogle className="w-5 h-5" />
          Continue with Google
        </button>

        <button className="flex items-center justify-center gap-2 w-full max-w-[481px] mx-auto h-[55px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] my-2 md:mb-6">
          <FaFacebook className="w-5 h-5" />
          Continue with Facebook
        </button>

        <div className=" my-2 md:my-6  text-white text-center font-raleway text-[18px] sm:text-[20px] md:text-[24px]">
          or
        </div>

        {/* Form */}
        <input
          type="email"
          placeholder="E-mail"
          className="w-full max-w-[411px] mx-auto h-[50px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 block"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-[411px] mx-auto h-[50px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-6 block"
        />

        {/* Submit Button */}
        <button className="w-full max-w-[481px] mx-auto h-[50px] sm:h-[63px] rounded-[13px] border-b-[4px] border-b-[rgba(223,106,186,0.86)] text-white font-bold text-[20px] sm:text-[22px] md:text-[24px] text-center my-2 md:my-6 bg-[radial-gradient(2640.68%_277.52%_at_114.84%_369.84%,_#E46BBB_0%,_#E280C1_8.33%,_#D9D9D9_43.75%,_#EB78BD_43.76%,_rgba(183,46,178,0.94)_100%)] hover:opacity-90">
          Sign In.
        </button>

        {/* Links */}
        <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-6">
          don’t have an account?{" "}
          <a href="/register" className="font-bold text-[18px] sm:text-[20px] md:text-[24px]">
            Create an account
          </a>
        </p>
        <a href="#" className="font-bold text-[18px] sm:text-[20px] md:text-[24px] mt-4 block">
          Forgot password?
        </a>
      </div>
    </div>
  );
}
