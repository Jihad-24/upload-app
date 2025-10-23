"use client";
import { appTheme } from "@/app/plugins/appTheme";
import install from "@/assets/install.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const InstallButton: React.FC = () => {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(display-mode: standalone)");
      // Schedule the state update asynchronously
      Promise.resolve().then(() => setIsStandalone(media.matches));
    }
  }, []);

  if (isStandalone) return null;

  return (
    <Link href={"/how-to-install"}>
      <div
        className="flex flex-row items-center gap-2 font-semibold rounded-full py-[0.3rem] px-[1.2rem]"
        style={{
          backgroundColor: appTheme.primaryPalette.white,
        }}
      >
        <span
          style={{
            color: appTheme.secondaryPalette.darkForestGreen,
          }}
        >
          Install
        </span>
        <button>
          <Image src={install} alt="Install" width={16} height={16} />
        </button>
      </div>
    </Link>
  );
};
