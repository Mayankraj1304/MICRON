import React from "react";
import switchToLogin from "./Auth.jsx";
const Signup = ({ switchToLogin }) => {
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
          <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl px-10 py-6">

            <h2 class="text-3xl font-serif font-semibold text-center mb-2">
              Create Account
            </h2>
            <p class="text-center text-gray-500 text-sm mb-8">
              Sign up to get started with your account
            </p>

            <div class="mb-4">
              <label class="text-sm text-gray-600 block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                class="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div class="mb-4">
              <label class="text-sm text-gray-600 block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div class="mb-4">
              <label class="text-sm text-gray-600 block mb-1">Password</label>
              <div class="relative">
                <input
                  type="password"
                  placeholder="Create a password"
                  class="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                />
                <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                  👁
                </span>
              </div>
            </div>

            <div class="mb-6">
              <label class="text-sm text-gray-600 block mb-1">
                Confirm Password
              </label>
              <div class="relative">
                <input
                  type="password"
                  placeholder="Confirm your password"
                  class="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                />
                <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                  👁
                </span>
              </div>
            </div>

            <div class="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <input type="checkbox" class="accent-black" />
              <span>
                I agree to the
                <a href="#" class="text-black font-medium">
                  Terms
                </a>
                &
                <a href="#" class="text-black font-medium">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button class="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-900 transition">
              Sign Up
            </button>

            <button class="w-full mt-4 border rounded-lg py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                class="w-5 h-5"
                alt="google"
              />
              Sign Up with Google
            </button>

            <p class="text-center text-sm text-gray-500 mt-8">
              Already have an account?
              <button onClick={switchToLogin} class="text-black font-medium">
                {" "}
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
