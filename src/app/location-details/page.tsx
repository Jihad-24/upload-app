'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import locationBg from '@/assets/splash-screen.jpg';
import { DetailsHeader } from '@/components/DetailsHeader';
import { appTheme } from '../plugins/appTheme';


export const LocationSummary: React.FC = () => {
  const router = useRouter();

  // Static data
  const latitude = 23.8103;
  const longitude = 90.4125;
  const texts = {
    location: 'Location',
    currentLocationDetection: 'Current Location Detection',
    changeLocation: 'Change Location',
    save: 'Save',
  };

  const navigateToDashboard = () => router.push('/');
  const goToManualLocationSelection = () => router.push('/location');

  return (
    <div className="flex items-center justify-center ">
      <div className="relative w-full max-w-md h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={locationBg}
            alt="Location Screen"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-black"
            onClick={navigateToDashboard}
            style={{ opacity: 0.4 }}
          />
        </div>

        {/* Input Fields */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <div className="w-full px-2 pb-2 pt-0 bg-white rounded-t-3xl shadow-md relative">
            {/* Header */}
            <div className="mb-6 flex gap-2 flex-col">
              <DetailsHeader
                title={texts.location}
                onClose={navigateToDashboard}
                draggable
              />

              <div className="flex flex-col px-7 space-y-6">
                <span
                  className="text-medium font-medium"
                  style={{ color: appTheme.secondaryPalette.davysGray }}
                >
                  {texts.currentLocationDetection} ({latitude}, {longitude})
                </span>
                <div
                  className="text-medium font-regular underline cursor-pointer"
                  style={{ color: appTheme.secondaryPalette.seaGreen }}
                  onClick={goToManualLocationSelection}
                >
                  {texts.changeLocation}
                </div>
                <button
                  type="submit"
                  className="w-full text-base font-medium py-3 mt-1 rounded-3xl focus:outline-none"
                  style={{
                    color: appTheme.primaryPalette.white,
                    backgroundColor: appTheme.secondaryPalette.seaGreen,
                  }}
                  aria-label="Save"
                  onClick={navigateToDashboard}
                >
                  {texts.save}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSummary;