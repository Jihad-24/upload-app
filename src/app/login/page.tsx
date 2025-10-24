"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import user from "@/assets/user.svg";
import eyeInvisible from "@/assets/eye-invisible.svg";
import eyeVisible from "@/assets/eye-visible.svg";
import poptech from "@/assets/poptech.svg";
import loginBackGround from "@/assets/splash-screen.jpg";
import logo from "@/assets/logo.svg";
import { InstallButton } from "@/components/InstallButton";
import { appTheme } from "../plugins/appTheme";
import { Lock } from "@/components/Lock";

type Props = {
  hideInstall?: boolean;
};

export default function LoginPage({ hideInstall = false }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      <div className="relative w-full max-w-md h-dvh overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={loginBackGround}
            alt="Login Screen"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute top-8 left-2 m-4 w-12 h-12 object-contain z-10">
            <Image src={logo} alt="Logo" width={48} height={48} />
          </div>
          <div className="absolute top-8 right-2 m-4 object-contain z-10">
            {!hideInstall && <InstallButton />}
          </div>
        </div>

        {/* Poptech Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[30%]">
          <Image
            src={poptech}
            alt="Poptech"
            className="object-contain w-full"
          />
        </div>

        {/* Input Section */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <div className="w-full p-4 bg-white rounded-t-3xl shadow-md">
            {/* Header */}
            <div className="text-center mb-6 flex gap-2 flex-col">
              <h1
                className="text-2xl font-semibold"
                style={{ color: appTheme.primaryPalette.black }}
              >
                Welcome Back
              </h1>
              <p
                className="text-[0.8125rem] font-semibold"
                style={{ color: appTheme.secondaryPalette.silverSand }}
              >
                Login with Replant World
              </p>
            </div>

            {/* Form */}
            <form>
              {/* Username */}
              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Image src={user} alt="User" width={16} height={16} />
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none"
                  style={{
                    color: appTheme.secondaryPalette.darkGreen,
                    backgroundColor: appTheme.secondaryPalette.mercuryGray,
                  }}
                />
              </div>

              {/* Password */}
              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock
                    overrideColor
                    pathClassName="fill-[#305335]"
                    svgClassName="h-5 w-5"
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="text-sm rounded-lg block w-full pl-10 pr-10 p-2.5 focus:outline-none"
                  style={{
                    color: appTheme.secondaryPalette.darkGreen,
                    backgroundColor: appTheme.secondaryPalette.mercuryGray,
                  }}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="focus:outline-none"
                  >
                    <Image
                      src={showPassword ? eyeInvisible : eyeVisible}
                      alt={showPassword ? "Hide password" : "Show password"}
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end items-center mb-3">
                <Link
                  href="/forgot-password"
                  className="text-sm font-semibold"
                  style={{ color: appTheme.secondaryPalette.darkForestGreen }}
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="button"
                className="w-full text-sm font-medium py-2.5 rounded-3xl focus:outline-none"
                style={{
                  color: appTheme.primaryPalette.white,
                  backgroundColor: appTheme.secondaryPalette.darkForestGreen,
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
