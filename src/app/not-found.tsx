"use client";
import Image from "next/image";
import React from "react";

// Assets
import loginBackGround from "@/assets/splash-screen.jpg";
import logo from "@/assets/logo.svg";
import { appTheme } from "./plugins/appTheme";
import { InstallButton } from "@/components/InstallButton";
import Link from "next/link";
type Props = {
  hideInstall?: boolean;
};

export default function NotFoundPage({ hideInstall = false }: Props) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-full max-w-md h-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={loginBackGround}
            alt="Not Found Screen"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-2 m-4 w-12 h-12 object-contain z-10">
            <Image src={logo} alt="Logo" width={48} height={48} />
          </div>
          <div className="absolute top-8 right-2 m-4 object-contain z-10">
            {!hideInstall && <InstallButton />}
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <div className="w-full p-4 bg-white rounded-t-3xl shadow-md">
            <div className="text-center mb-6 flex flex-col gap-2">
              <h1
                className="text-2xl font-semibold"
                style={{ color: appTheme.primaryPalette.black }}
              >
                404 - Page Not Found
              </h1>
              <p
                className="text-[0.8125rem] font-semibold"
                style={{ color: appTheme.secondaryPalette.lightBlack }}
              >
                The page you are trying to reach does not exist.
              </p>
            </div>

            <Link href="/">
              <button
                className="w-full text-sm font-medium py-2.5 rounded-3xl focus:outline-none cursor-pointer"
                style={{
                  color: appTheme.primaryPalette.white,
                  backgroundColor: appTheme.secondaryPalette.darkForestGreen,
                }}
              >
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
