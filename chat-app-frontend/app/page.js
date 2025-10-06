"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background Gradient Circles - matching login theme */}
      <div className="absolute -top-28 -left-18 sm:10 xl:left-28 2xl:left-36 w-[200px] sm:w-[254px] h-[200px] sm:h-[254px] rounded-full pointer-events-none bg-[radial-gradient(79.98%_79.98%_at_74.58%_16.62%,#E46BBB_0%,#EB78BD_29.89%,#B72EB2_73.63%,#81249A_100%)]"></div>
      <div className="absolute top-10 -right-20 xl:right-28 2xl:right-36 w-[120px] sm:w-[137px] h-[120px] sm:h-[137px] rounded-full pointer-events-none bg-[radial-gradient(84.4%_84.4%_at_27.78%_24.07%,_#646464_0%,_#292929_60.46%,_#0F0F0F_79.62%,_#1B1B1B_100%)]"></div>

      {/* Content */}
      <section className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-transparent p-6 sm:p-8 rounded-2xl text-center">
        <h1 className="mx-auto w-fit text-white text-center font-poppins text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-normal mb-4">
          Welcome.
        </h1>
        <p className="text-white/80 text-[16px] sm:text-[18px] md:text-[20px] mb-8">
          Your next conversation starts here. Join or sign in to continue.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Login - matches the gradient CTA from the login page */}
          <Link
            href="/login"
            aria-label="Go to Login"
            className="w-full sm:w-auto min-w-[220px] h-[50px] sm:h-[55px] md:h-[63px] inline-flex items-center justify-center rounded-[13px] border-b-[4px] border-b-[rgba(223,106,186,0.86)] text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] bg-[radial-gradient(2640.68%_277.52%_at_114.84%_369.84%,_#E46BBB_0%,_#E280C1_8.33%,_#D9D9D9_43.75%,_#EB78BD_43.76%,_rgba(183,46,178,0.94)_100%)] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Login
          </Link>

          {/* Register - outlined glass style like social buttons */}
          <Link
            href="/register"
            aria-label="Go to Register"
            className="w-full sm:w-auto min-w-[220px] h-[50px] sm:h-[55px] md:h-[63px] inline-flex items-center justify-center rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[22px] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Register
          </Link>
        </div>
      </section>
    </main>
  )
}
