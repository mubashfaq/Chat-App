"use client";

import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { login as userLogin, socialLogin } from "@/lib/AuthApi";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ---- GOOGLE LOGIN ----
  const handleGoogleLogin = async (tokenResponse) => {
    try {
      setLoading(true);
      const res = await socialLogin("google", tokenResponse.access_token);

      if (res.success) {
        toast.success("Google login successful!");
        localStorage.setItem("auth_token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        router.push("/chat");
      } else {
        toast.error(res.message || "Google login failed.");
      }
    } catch (err) {
      console.error("Google login error:", err);
      toast.error("Something went wrong with Google login.");
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: () => toast.error("Google Login Failed"),
  });

  // ---- FACEBOOK LOGIN ----
  const handleFacebookSuccess = async (response) => {
    try {
      setLoading(true);
      const res = await socialLogin("facebook", response.accessToken);

      if (res.success) {
        toast.success("Facebook login successful!");
        localStorage.setItem("auth_token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        router.push("/chat");
      } else {
        toast.error(res.message || "Facebook login failed.");
      }
    } catch (err) {
      console.error("Facebook login error:", err);
      toast.error("Something went wrong with Facebook login.");
    } finally {
      setLoading(false);
    }
  };

  // ---- HANDLE LOGIN SUBMIT ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await userLogin({ email, password });

      if (res.success) {
        toast.success("User logged in successfully!");
        localStorage.setItem("auth_token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        router.push("/chat");
      } else {
        // Show validation or custom backend messages
        if (res.errors) {
          Object.values(res.errors).forEach((errorArray) => {
            errorArray.forEach((errorMsg) => toast.error(errorMsg));
          });
        } else {
          toast.error(res.message || "Invalid credentials.");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Network error or server unreachable.");
    } finally {
      setLoading(false);
    }
  };

  // ---- UI ----
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

        {/* GOOGLE LOGIN BUTTON */}
        <button
          onClick={() => googleLogin()}
          disabled={loading}
          className={`flex items-center justify-center gap-2 w-full max-w-[481px] mx-auto h-[55px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] mb-4 cursor-pointer ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          <FaGoogle className="w-5 h-5" />
          {loading ? "Processing..." : "Continue with Google"}
        </button>

        {/* FACEBOOK LOGIN BUTTON */}
        <FacebookLogin
          appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
          onSuccess={handleFacebookSuccess}
          render={({ onClick }) => (
            <button
              onClick={onClick}
              disabled={loading}
              className={`flex items-center justify-center gap-2 w-full max-w-[481px] mx-auto h-[55px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] mb-6 cursor-pointer ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              <FaFacebook className="w-5 h-5" />
              {loading ? "Processing..." : "Continue with Facebook"}
            </button>
          )}
        />

        <div className="my-2 md:my-6 text-white text-center font-raleway text-[18px] sm:text-[20px] md:text-[24px]">
          or
        </div>

        {/* LOGIN FORM */}
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            required
            className="w-full max-w-[411px] mx-auto h-[50px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] px-4 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4 block"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            className="w-full max-w-[411px] mx-auto h-[50px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] px-4 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-2 md:mb-6 block"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full max-w-[481px] mx-auto h-[50px] sm:h-[63px] rounded-[13px] border-b-[4px] border-b-[rgba(223,106,186,0.86)] text-white font-bold text-[20px] sm:text-[22px] md:text-[24px] text-center my-2 md:my-6 bg-[radial-gradient(2640.68%_277.52%_at_114.84%_369.84%,_#E46BBB_0%,_#E280C1_8.33%,_#D9D9D9_43.75%,_#EB78BD_43.76%,_rgba(183,46,178,0.94)_100%)] hover:opacity-90 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing in..." : "Sign In."}
          </button>
        </form>

        {/* Links */}
        <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-6">
          don’t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-[18px] sm:text-[20px] md:text-[24px] underline-offset-4 hover:underline"
          >
            Create an account
          </Link>
        </p>

        <Link
          href="/forgot-password"
          className="font-bold text-[18px] sm:text-[20px] md:text-[24px] mt-4 block underline-offset-4 hover:underline"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
