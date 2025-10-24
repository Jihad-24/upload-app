"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import splashScreen from "@/assets/splash-screen.jpg";
import logo from "@/assets/logo.svg";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = false; // Replace with your auth check logic

    const timer = setTimeout(() => {
      if (isAuthenticated) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full h-dvh overflow-hidden relative">
      <div className="flex items-center justify-center h-full">
        <Image
          alt="Splash Screen"
          src={splashScreen}
          fill
          className="object-cover"
          priority
        />
        <Image
          alt="Logo"
          src={logo}
          width={80}
          height={80}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>
    </div>
  );
}
