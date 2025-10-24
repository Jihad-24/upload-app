"use client";

import { useState } from "react";
import Image from "next/image";
import { InstallButton } from "@/components/InstallButton";
import { appTheme } from "../plugins/appTheme";
import { Lock } from "@/components/Lock";

import splashScreen from "@/assets/splash-screen.jpg";
import logo from "@/assets/logo.svg";
import eyeInvisible from "@/assets/eye-invisible.svg";
import eyeVisible from "@/assets/eye-visible.svg";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md h-dvh overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            alt="Reset Password Background"
            src={splashScreen}
            fill
            className="object-cover"
            priority
          />
          <Image
            alt="Logo"
            src={logo}
            width={48}
            height={48}
            className="absolute top-8 left-4 z-10 object-contain"
          />
          <div className="absolute top-8 right-4 z-10">
            <InstallButton />
          </div>
        </div>

        {/* Form */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <div className="w-full p-4 bg-white rounded-t-3xl shadow-md">
            {/* Header */}
            <div className="text-center mb-6 flex gap-2 flex-col">
              <h1
                className="text-2xl font-semibold"
                style={{
                  color: appTheme.primaryPalette.black,
                }}
              >
                Reset Password
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              {/* New Password */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock
                      overrideColor
                      pathClassName="fill-[#305335]"
                      svgClassName="h-5 w-5"
                    />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="text-sm rounded-lg block w-full pl-10 pr-10 p-2.5 focus:outline-none"
                    style={{
                      color: appTheme.secondaryPalette.darkGreen,
                      backgroundColor: appTheme.secondaryPalette.mintGreen,
                      border: "none",
                    }}
                    placeholder="New Password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      className="text-gray-500 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <Image
                        alt={showPassword ? "Hide password" : "Show password"}
                        src={showPassword ? eyeInvisible : eyeVisible}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock
                      overrideColor
                      pathClassName="fill-[#305335]"
                      svgClassName="h-5 w-5"
                    />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="text-sm rounded-lg block w-full pl-10 pr-10 p-2.5 focus:outline-none"
                    style={{
                      color: appTheme.secondaryPalette.darkGreen,
                      backgroundColor: appTheme.secondaryPalette.mintGreen,
                      border: "none",
                    }}
                    placeholder="Confirm Password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      className="text-gray-500 focus:outline-none"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      <Image
                        alt={
                          showConfirmPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        src={showConfirmPassword ? eyeInvisible : eyeVisible}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Reset button */}
              <button
                type="submit"
                className="w-full text-sm font-medium py-2.5 rounded-3xl focus:outline-none"
                style={{
                  color: appTheme.primaryPalette.white,
                  backgroundColor: appTheme.secondaryPalette.darkForestGreen,
                }}
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
