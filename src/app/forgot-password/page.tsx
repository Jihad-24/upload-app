"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import loginBackGround from "@/assets/splash-screen.jpg";
import { DetailsHeader } from "@/components/DetailsHeader";
import { appTheme } from "../plugins/appTheme";


const ForgotPassword: React.FC = () => {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={loginBackGround}
            alt="Login Screen"
            className="w-full h-full object-cover"
            fill
          />
          <div
            className="absolute inset-0 bg-black"
            onClick={goBack}
            style={{ opacity: 0.4 }}
          ></div>
        </div>

        {/* Input Fields */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <div className="w-full px-2 pb-2 pt-0 bg-white rounded-t-3xl shadow-md">
            {/* Header */}
            <div className="mb-6 flex gap-2 flex-col">
              <DetailsHeader
                title="Need help accessing your account?"
                onClose={goBack}
                draggable
              />

              <p
                className="py-0 px-8 pl-7 pt-2 text-left text-[0.9125rem] font-medium"
                style={{
                  color: appTheme.secondaryPalette.davysGray,
                }}
              >
                Contact your coordinator and ask for the password reset link.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
