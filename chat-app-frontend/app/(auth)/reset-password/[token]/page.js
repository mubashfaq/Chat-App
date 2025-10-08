"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams(); // Get token from URL path
  const searchParams = useSearchParams(); // Get email from query params
  const router = useRouter();

  // Auto-fill email from URL if provided
  useEffect(() => {
    const emailFromUrl = searchParams.get("email");
    if (emailFromUrl) {
      setEmail(decodeURIComponent(emailFromUrl));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Validate password length
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          token: params.token, // Get token from URL path parameter
          email,
          password,
          password_confirmation: confirmPassword,
        }),
      });

      const data = await res.json();
      
      if (res.ok) {
        toast.success("Password reset successfully!");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        toast.error(
          data.message || "Failed to reset password. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <Toaster position="top-center" />

      {/* Gradient Circles */}
      <div className="absolute -top-28 -left-18 sm:10 xl:left-28 2xl:left-36 w-[200px] sm:w-[254px] h-[200px] sm:h-[254px] rounded-full pointer-events-none bg-[radial-gradient(79.98%_79.98%_at_74.58%_16.62%,#E46BBB_0%,#EB78BD_29.89%,#B72EB2_73.63%,#81249A_100%)]"></div>
      <div className="absolute top-10 -right-20 xl:right-28 2xl:right-36 w-[120px] sm:w-[137px] h-[120px] sm:h-[137px] rounded-full pointer-events-none bg-[radial-gradient(84.4%_84.4%_at_27.78%_24.07%,_#646464_0%,_#292929_60.46%,_#0F0F0F_79.62%,_#1B1B1B_100%)]"></div>

      {/* Reset Password Box */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-transparent p-6 sm:p-8 rounded-2xl text-center">
        <h2 className="mx-auto w-fit text-white font-poppins text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-normal mb-4">
          Reset Password
        </h2>

        <p className="text-white/90 text-[14px] sm:text-[16px] md:text-[18px] mb-6 max-w-[481px] mx-auto">
          Enter your email and new password to reset your account.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-[411px] mx-auto h-[50px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] px-4 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4 block placeholder:text-white/50"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="New Password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full max-w-[411px] mx-auto h-[50px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] px-4 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4 block placeholder:text-white/50"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            required
            minLength={8}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full max-w-[411px] mx-auto h-[50px] sm:h-[61px] rounded-[18px] border-[4px] border-[#30303D] bg-transparent text-white text-[18px] sm:text-[20px] md:text-[24px] px-4 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-6 block placeholder:text-white/50"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full max-w-[481px] mx-auto h-[50px] sm:h-[63px] rounded-[13px] border-b-[4px] border-b-[rgba(223,106,186,0.86)] text-white font-bold text-[20px] sm:text-[22px] md:text-[24px] text-center my-2 md:my-6 bg-[radial-gradient(2640.68%_277.52%_at_114.84%_369.84%,_#E46BBB_0%,_#E280C1_8.33%,_#D9D9D9_43.75%,_#EB78BD_43.76%,_rgba(183,46,178,0.94)_100%)] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}