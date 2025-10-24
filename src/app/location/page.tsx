"use client";
import React, { useState } from "react";
import locationBg from "@/assets/splash-screen.jpg";
import Image from "next/image";
import { DetailsHeader } from "@/components/DetailsHeader";
import { useRouter } from "next/navigation";

// Theme
const appTheme = {
  primaryPalette: { black: "#000", white: "#fff" },
  secondaryPalette: {
    davysGray: "#555555",
    paleLightGray: "#F5F5F5",
    seaGreen: "#2C5F5D",
  },
};

export const LocationStatic: React.FC = () => {
  const [locationInput, setLocationInput] = useState("");
  const router = useRouter();

  const navigateToDashboard = () => {
    // For static demo, we just log
    router.push("/");
    console.log("Navigate to dashboard");
  };

  const handleSaveLocation = () => {
    const [latitudeStr, longitudeStr] = locationInput
      .split(",")
      .map((coord) => coord.trim());

    const latitude = parseFloat(latitudeStr);
    const longitude = parseFloat(longitudeStr);

    if (
      isNaN(latitude) ||
      isNaN(longitude) ||
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      alert("Please enter a valid location"); // Static version of openSnackbar
      return;
    }

    console.log("Saved location:", { latitude, longitude });
    alert("Location saved!"); // For demo
  };

  return (
    <div className="flex items-center justify-center  h-screen">
      <div className="relative w-full max-w-md h-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            alt="Location"
            src={locationBg}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black"
            onClick={navigateToDashboard}
            style={{ opacity: 0.4 }}
          ></div>
        </div>

        {/* Input Fields */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <div className="w-full px-2 pb-2 pt-0 bg-white rounded-t-3xl shadow-md relative">
            <div className="mb-6 flex gap-2 flex-col">
              <DetailsHeader
                title={"Select Location"}
                onClose={navigateToDashboard}
                draggable
              />
              <div className="flex flex-col px-6 space-y-6">
                <span
                  className="text-medium font-medium"
                  style={{
                    color: appTheme.secondaryPalette.davysGray,
                  }}
                >
                  Unable to detect your location so kindly enter manually.
                </span>
                <input
                  type="text"
                  className="text-sm rounded-lg block w-full p-3 border-none focus:outline-none"
                  style={{
                    color: appTheme.primaryPalette.black,
                    backgroundColor: appTheme.secondaryPalette.paleLightGray,
                  }}
                  placeholder="Enter Latitude, Longitude (e.g., 40.7128, -74.0060)"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="w-full text-base font-medium py-3 mt-1 rounded-3xl focus:outline-none cursor-pointer"
                  style={{
                    color: appTheme.primaryPalette.white,
                    backgroundColor: appTheme.secondaryPalette.seaGreen,
                  }}
                  aria-label="Save"
                  onClick={handleSaveLocation}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationStatic;
