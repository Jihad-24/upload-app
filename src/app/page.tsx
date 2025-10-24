"use client";

import { useState } from "react";
import Image from "next/image";
import userProfile from "@/assets/splash-screen.jpg";
import logo from "@/assets/logo.svg";
import plantedTree from "@/assets/planted-tree.svg";
import home from "@/assets/home.svg";
import union from "@/assets/union.svg";
import ellipse from "@/assets/ellipse.svg";
import camera from "@/assets/camera.svg";
import userIcon from "@/assets/user.svg";
import approved from "@/assets/approve.svg";
import rejected from "@/assets/reject.svg";
import waiting from "@/assets/waiting.svg";
import { appTheme } from "./plugins/appTheme";
import { InstallButton } from "../components/InstallButton";
import { PlantedTreesModal } from "@/components/PlantedTreesModal";
import tree1 from "@/assets/tree-1.jpg";
import tree2 from "@/assets/tree-2.jpg";
import tree3 from "@/assets/tree-3.jpg";
import { UserModal } from "@/components/Usermodal";

export default function Home() {
  const [activeModal, setActiveModal] = useState<
    null | "planted" | "pending" | "rejected" | "approved"
  >(null);
  const [activeUserModal, setActiveUserModal] = useState(false);

  const plantedTrees = [
    {
      id: 1,
      name: "Tree #1",
      speciesId: 1,
      lat: 90.0,
      lon: 180.0,
      date: "18-10-2025 | 02:14",
      cost: "$1.50",
      image: tree1,
    },
    {
      id: 2,
      name: "Tree #2",
      speciesId: 3,
      lat: 90.0,
      lon: 180.0,
      date: "18-10-2025 | 02:23",
      cost: "$1.50",
      image: tree2,
    },
    {
      id: 3,
      name: "Tree #3",
      speciesId: 1,
      lat: 90.0,
      lon: 180.0,
      date: "18-10-2025 | 02:14",
      cost: "$1.50",
      image: tree3,
    },
    {
      id: 4,
      name: "Tree #4",
      speciesId: 3,
      lat: 90.0,
      lon: 180.0,
      date: "18-10-2025 | 02:23",
      cost: "$1.50",
      image: tree1,
    },
    {
      id: 5,
      name: "Tree #5",
      speciesId: 3,
      lat: 90.0,
      lon: 180.0,
      date: "18-10-2025 | 02:23",
      cost: "$1.50",
      image: tree2,
    },
  ];

  const pendingTrees = [
    {
      id: 1,
      name: "Tree #1",
      speciesId: 5,
      lat: 45.0,
      lon: 90.0,
      date: "19-10-2025 | 01:00",
      cost: "$1.75",
      image: tree3,
    },
    {
      id: 2,
      name: "Tree #2",
      speciesId: 5,
      lat: 45.0,
      lon: 90.0,
      date: "19-10-2025 | 01:00",
      cost: "$1.75",
      image: tree2,
    },
    {
      id: 3,
      name: "Tree #3",
      speciesId: 5,
      lat: 45.0,
      lon: 90.0,
      date: "19-10-2025 | 01:00",
      cost: "$1.75",
      image: tree1,
    },
  ];

  const rejectedTrees = [
    {
      id: 1,
      name: "Tree #1",
      speciesId: 5,
      lat: 45.0,
      lon: 90.0,
      date: "19-10-2025 | 01:00",
      cost: "$1.75",
      image: tree3,
    },
    {
      id: 2,
      name: "Tree #2",
      speciesId: 5,
      lat: 45.0,
      lon: 90.0,
      date: "19-10-2025 | 01:00",
      cost: "$1.75",
      image: tree3,
    },
  ];
  const approvedTrees = [...plantedTrees, ...pendingTrees];

  const modalData = {
    planted: { title: "Planted Trees", trees: plantedTrees },
    pending: { title: "Pending Trees", trees: pendingTrees },
    rejected: { title: "Rejected Trees", trees: rejectedTrees },
    approved: { title: "Approved Trees", trees: approvedTrees },
  };

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
          className="w-full max-w-md rounded-t-3xl shadow-md overflow-hidden"
          style={{ backgroundColor: appTheme.secondaryPalette.darkTealGreen }}
        >
          <div className="grid grid-cols-2 gap-6 p-5">
            {/* Planted Trees */}
            <div
              onClick={() => setActiveModal("planted")}
              className="rounded-2xl p-5 shadow-lg flex flex-col items-start justify-between cursor-pointer"
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
                {plantedTrees?.length}
              </span>
            </div>

            {/* Pending */}
            <div
              onClick={() => setActiveModal("pending")}
              className="rounded-2xl p-5 shadow-lg flex flex-col items-start justify-between cursor-pointer"
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
                {pendingTrees?.length}
              </span>
            </div>

            {/* Rejected */}
            <div
              onClick={() => setActiveModal("rejected")}
              className="rounded-2xl p-5 shadow-lg flex flex-col items-start justify-between cursor-pointer"
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
                {rejectedTrees?.length}
              </span>
            </div>

            {/* Approved */}
            <div
              onClick={() => setActiveModal("approved")}
              className="rounded-2xl p-5 shadow-lg flex flex-col items-start justify-between cursor-pointer"
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
                {approvedTrees?.length}
              </span>
            </div>
          </div>
          {/* Bottom Menu */}
          <div className="relative mt-6 mb-0">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <button className="cursor-pointer">
                <Image
                  className="relative"
                  src={ellipse}
                  alt="ellipse"
                  width={60}
                  height={60}
                />
                <Image
                  className="absolute top-4 left-1/2 -translate-x-1/2"
                  src={camera}
                  alt="camera"
                  width={30}
                  height={30}
                />
              </button>
            </div>
            <Image src={union} alt="Union" className="w-full object-cover" />
            <div className="absolute bottom-5 left-8 right-8 flex justify-between items-center h-16 px-6">
              <button className="cursor-pointer">
                <Image src={home} alt="Home" width={26} height={26} />
              </button>
              <button
                className="cursor-pointer"
                onClick={() => setActiveUserModal(true)}
              >
                <Image src={userIcon} alt="Profile" width={19} height={19} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic modal */}
      {activeModal && (
        <PlantedTreesModal
          title={modalData[activeModal].title}
          trees={modalData[activeModal].trees}
          onClose={() => setActiveModal(null)}
        />
      )}
      {activeUserModal && (
        <UserModal onClose={() => setActiveUserModal(false)} />
      )}
    </div>
  );
}
