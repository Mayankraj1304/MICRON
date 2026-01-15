import React from "react";
import switchToSignup from "./Auth.jsx";

export default function Login({ switchToSignup }) {
  return (
    <div className="min-h-screen w-full bg-[#020024] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff2aa3_0%,#6a00ff_35%,#020024_70%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#00d4ff_0%,transparent_60%)] opacity-80"></div>

      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.08)_50%,transparent_70%)]"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl px-10 py-4">
          <div className="flex justify-center mb-8">
            <span className="text-xl font-semibold tracking-wide">MICRONT</span>
          </div>

          <h2 className="text-3xl font-serif font-semibold text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Enter your email and password to access your account
          </p>

          <div className="mb-4">
            <label className="text-sm text-gray-600 block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600 block mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                👁
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-black" />
              Remember me
            </label>
            <a className="text-gray-500 hover:text-black">
              Forgot Password
            </a>
          </div>

          <button className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-900 transition">
            Sign In
          </button>

          <button className="w-full mt-4 border rounded-lg py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="google"
            />
            Sign In with Google
          </button>

          <p className="text-center text-sm text-gray-500 mt-8">
            Don’t have an account?
            <button onClick={switchToSignup} className="text-black font-medium hover:underline">
              {" "}
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

