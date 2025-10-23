"use client";

import Image from "next/image";
import { appTheme } from "@/app/plugins/appTheme";
import { useRouter } from "next/navigation";

// Background and logo
import loginBackGround from "@/assets/splash-screen.jpg";
import logo from "@/assets/logo.svg";

// iOS Steps
import iosStep1 from "@/assets/install/ios-safari-step-1.webp";
import iosStep2 from "@/assets/install/ios-safari-step-2.webp";
import iosStep3 from "@/assets/install/ios-safari-step-3.webp";

// Android Steps
import androidStep1 from "@/assets/install/android-chrome-step-1.webp";
import androidStep2 from "@/assets/install/android-chrome-step-2.webp";
import androidStep3 from "@/assets/install/android-chrome-step-3.webp";
import { InstallButton } from "../../components/InstallButton";

// Local messages object
const messages = {
  installation: "Installation",
  followTheStepsBelowToInstallTheApp:
    "Follow the steps below to install the app.",
  clickTheShareButton: "Click the Share button.",
  scrollDownToFindAddToHomeScreenOptionAndSelectIt:
    "Scroll down to find Add to Home Screen option and select it.",
  clickAddToConfirmInstallation: "Click Add to confirm installation.",
  clickTheOptionsMenuButton: "Click the Options menu button.",
  selectInstallAppOption: "Select Install app option.",
  clickInstallToConfirmInstallation: "Click Install to confirm installation.",
  theAppIsNowInstalledAndAddedToTheHomeScreen:
    "The app is now installed and added to the Home Screen.",
  back: "Back",
};

type Props = {
  hideInstall?: boolean;
};

export const InstallationSteps: React.FC<Props> = ({ hideInstall = false }) => {
  const router = useRouter();
  const goBack = () => router.back();

  // Detect platform
  const ua = typeof window !== "undefined" ? window.navigator.userAgent : "";
  const isAndroid = /Android/.test(ua);
  const isApple = /iPhone|iPad|iPod|Macintosh/.test(ua);

  const steps = isApple
    ? [
        { img: iosStep1, text: messages.clickTheShareButton },
        {
          img: iosStep2,
          text: messages.scrollDownToFindAddToHomeScreenOptionAndSelectIt,
        },
        { img: iosStep3, text: messages.clickAddToConfirmInstallation },
      ]
    : isAndroid
    ? [
        { img: androidStep1, text: messages.clickTheOptionsMenuButton },
        { img: androidStep2, text: messages.selectInstallAppOption },
        { img: androidStep3, text: messages.clickInstallToConfirmInstallation },
      ]
    : [];

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={loginBackGround}
            alt="Installation Screen"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute top-12 left-4 w-12 h-12 z-10">
            <Image src={logo} alt="Logo" className="object-contain" fill />
          </div>
          {/* <div className="absolute top-8 right-4 z-10">
            {!hideInstall && <InstallButton />}
          </div> */}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <div className="w-full p-4 bg-white rounded-t-3xl shadow-md max-h-[65vh] overflow-y-auto">
            {/* Header */}
            <div className="text-center mb-6 flex flex-col gap-2">
              <h1
                className="text-2xl font-semibold"
                style={{ color: appTheme.primaryPalette.black }}
              >
                {messages.installation}
              </h1>
              <p
                className="text-[0.9rem] font-semibold"
                style={{ color: appTheme.secondaryPalette.lightBlack }}
              >
                {messages.followTheStepsBelowToInstallTheApp}
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-6">
              {steps.map((step, idx) => (
                <div key={idx}>
                  <Image
                    src={step.img}
                    alt={`Step ${idx + 1}`}
                    className="rounded-xl mx-auto mb-1 border border-teal-900 dark:border-white"
                  />
                  <p className="text-center text-sm">{step.text}</p>
                </div>
              ))}
            </div>

            <p
              className="text-center mb-6 text-[0.9rem] font-semibold"
              style={{ color: appTheme.secondaryPalette.lightBlack }}
            >
              {messages.theAppIsNowInstalledAndAddedToTheHomeScreen}
            </p>

            {/* Back button */}
            <button
              onClick={goBack}
              className="w-full text-sm font-medium py-2.5 rounded-3xl focus:outline-none cursor-pointer"
              style={{
                color: appTheme.primaryPalette.white,
                backgroundColor: appTheme.secondaryPalette.darkForestGreen,
              }}
            >
              {messages.back}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
