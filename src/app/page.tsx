"use client";

import Image from "next/image";
import userProfile from "@/assets/splash-screen.jpg";
import logo from "@/assets/logo.svg";
import plantedTree from "@/assets/planted-tree.svg";
import home from "@/assets/home.svg";
import union from "@/assets/union.svg";
import ellipse from "@/assets/ellipse.svg";
import camera from "@/assets/camera.svg";
import userIcon from "@/assets/user.svg";
import arrowIcon from "@/assets/arrow.svg";
import approved from "@/assets/approve.svg";
import rejected from "@/assets/reject.svg";
import waiting from "@/assets/waiting.svg";
import uploadFailed from "@/assets/upload-failed.svg";
import { appTheme } from "./plugins/appTheme";
import { InstallButton } from "../components/InstallButton";

export default function Home() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background */}
      <Image
        src={userProfile}
        alt="Background"
        className="object-cover w-full h-full"
        fill
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative max-w-md mx-auto h-full flex flex-col justify-between">
        {/* Header */}
        <div className="pb-4 mt-6 py-4 px-6">
          <div className="flex items-start gap-4 justify-between">
            <Image
              src={logo}
              alt="Logo"
              width={38}
              height={38}
              className="mb-6"
            />
            <InstallButton />
          </div>
          <h1
            className="text-3xl font-bold mb-1"
            style={{ color: appTheme.primaryPalette.white }}
          >
            Hi, Replant_World
          </h1>
          <p
            className="text-medium font-normal"
            style={{ color: appTheme.primaryPalette.white, opacity: 0.8 }}
          >
            Welcome to Replant World!
          </p>
        </div>

        {/* Menu Cards */}
        <div
          className="w-full max-w-md rounded-t-3xl shadow-md overflow-hidden "
          style={{ backgroundColor: appTheme.secondaryPalette.darkTealGreen }}
        >
          <div className="grid grid-cols-2 gap-6 p-5">
            {/* Planted Trees */}
            <div
              className="rounded-2xl p-5 shadow-lg flex flex-col items-start justify-between"
              style={{
                backgroundColor: appTheme.secondaryPalette.greenishBlue,
                border: `2px solid ${appTheme.secondaryPalette.borderColor}`,
              }}
            >
              <div className="flex items-start justify-between w-full">
                <span
                  className="text-sm"
                  style={{ color: appTheme.secondaryPalette.lightGreen }}
                >
                  Planted
                </span>
                <Image src={plantedTree} alt="Tree" width={24} height={24} />
              </div>

              <span
                className="text-2xl font-bold"
                style={{ color: appTheme.primaryPalette.white }}
              >
                4
              </span>
            </div>

            {/* Pending */}
            <div
              className="rounded-2xl p-5 shadow-lg flex flex-col items-start justify-between"
              style={{
                backgroundColor: appTheme.secondaryPalette.greenishBlue,
                border: `2px solid ${appTheme.secondaryPalette.borderColor}`,
              }}
            >
              <div className="flex items-start justify-between w-full">
                <span
                  className="text-sm"
                  style={{ color: appTheme.secondaryPalette.lightGreen }}
                >
                  Pending
                </span>
                <div className="relative">
                  <Image src={plantedTree} alt="Tree" width={24} height={24} />
                  <Image
                    className="absolute bottom-1 -right-[3px]"
                    src={waiting}
                    alt="Pending"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <span
                className="text-2xl font-bold"
                style={{ color: appTheme.primaryPalette.white }}
              >
                2
              </span>
            </div>

            {/* Rejected */}
            <div
              className="rounded-2xl p-5 shadow-lg flex flex-col items-start justify-between"
              style={{
                backgroundColor: appTheme.secondaryPalette.greenishBlue,
                border: `2px solid ${appTheme.secondaryPalette.borderColor}`,
              }}
            >
              <div className="flex items-start justify-between w-full">
                <span
                  className="text-sm"
                  style={{ color: appTheme.secondaryPalette.lightGreen }}
                >
                  Rejected
                </span>
                <div className="relative">
                  <Image src={plantedTree} alt="Tree" width={24} height={24} />
                  <Image
                    className="absolute bottom-1 -right-[3px]"
                    src={rejected}
                    alt="Pending"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <span
                className="text-2xl font-bold"
                style={{ color: appTheme.primaryPalette.white }}
              >
                0
              </span>
            </div>

            {/* Approved */}
            <div
              className="rounded-2xl p-5 shadow-lg flex flex-col items-start justify-between"
              style={{
                backgroundColor: appTheme.secondaryPalette.greenishBlue,
                border: `2px solid ${appTheme.secondaryPalette.borderColor}`,
              }}
            >
              <div className="flex items-start justify-between w-full">
                <span
                  className="text-sm"
                  style={{ color: appTheme.secondaryPalette.lightGreen }}
                >
                  Approved
                </span>
                <div className="relative">
                  <Image src={plantedTree} alt="Tree" width={24} height={24} />
                  <Image
                    className="absolute bottom-1 -right-[3px]"
                    src={approved}
                    alt="Pending"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <span
                className="text-2xl font-bold"
                style={{ color: appTheme.primaryPalette.white }}
              >
                8
              </span>
            </div>
          </div>

          {/* Bottom Menu */}
          <div className="relative mt-6 mb-0">
            <Image
              className="absolute -top-5 left-1/2 -translate-x-1/2"
              src={ellipse}
              alt="ellipse"
              width={60}
              height={60}
            />
            <Image
              className="absolute -top-1 left-1/2 -translate-x-1/2"
              src={camera}
              alt="camera"
              width={30}
              height={30}
            />

            <Image src={union} alt="Union" className="w-full object-cover" />
            <div className="absolute bottom-5 left-8 right-8 flex justify-between items-center h-16 px-6">
              <button>
                <Image src={home} alt="Home" width={26} height={26} />
              </button>
              <button>
                <Image src={userIcon} alt="Profile" width={19} height={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
