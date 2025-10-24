"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import logo from "@/assets/logo.svg";
import close from "@/assets/close-white.svg";
import keep from "@/assets/keep.svg";
import retake from "@/assets/retake.svg";
import ellipse from "@/assets/light-ellipse.svg";
import { Camera } from "@/components/Camera";
import { appTheme } from "../plugins/appTheme";

// Dummy trees for selection
import tree1 from "@/assets/tree-1.jpg";
import tree2 from "@/assets/tree-2.jpg";
import tree3 from "@/assets/tree-3.jpg";

type CapturedImage = {
  image: string;
  captured_at: string;
  latitude?: string;
  longitude?: string;
};

type Tree = {
  id: number;
  name: string;
  image: StaticImageData;
};

export const Capture: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isPreview, setIsPreview] = useState(false);
  const [isCameraLoading, setIsCameraLoading] = useState(false);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [cameraPermissionDenied, setCameraPermissionDenied] = useState(false);
  const [tmpImage, setTmpImage] = useState<CapturedImage | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const [isTreeSelectModal, setIsTreeSelectModal] = useState(false);
  const [isStep2Modal, setIsStep2Modal] = useState(false);
  const [selectedTreeId, setSelectedTreeId] = useState<number | null>(null);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");

  const trees: Tree[] = [
    { id: 1, name: "Oak", image: tree1 },
    { id: 2, name: "Pine", image: tree2 },
    { id: 3, name: "Maple", image: tree3 },
  ];

  const filteredTrees = trees.filter((tree) =>
    tree.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const playerRef = useRef<HTMLVideoElement>(null);

  // Open camera on mount
  useEffect(() => {
    if (pathname === "/capture") openCamera();
    return () => stopCamera();
  }, [pathname]);

  const openCamera = async () => {
    try {
      setIsCameraLoading(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      setStream(mediaStream);
      setCameraPermissionDenied(false);
    } catch (err) {
      console.error("Camera permission denied:", err);
      setCameraPermissionDenied(true);
    } finally {
      setIsCameraLoading(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  // Set video source
  useEffect(() => {
    const player = playerRef.current;
    if (player && stream) {
      player.srcObject = stream;
      player.onloadedmetadata = () => {
        player.play().catch((err) => console.error("Error playing video:", err));
      };
    }
    return () => {
      if (player) player.srcObject = null;
    };
  }, [stream]);

  const captureImage = () => {
    if (!playerRef.current) return;
    const player = playerRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    canvas.width = player.videoWidth;
    canvas.height = player.videoHeight;
    ctx.drawImage(player, 0, 0, canvas.width, canvas.height);

    const base64Image = canvas.toDataURL("image/jpeg", 0.8);

    const imageData: CapturedImage = {
      image: base64Image,
      captured_at: new Date().toISOString(),
    };

    setIsGettingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsGettingLocation(false);
        const updated = {
          ...imageData,
          latitude: pos.coords.latitude.toFixed(6),
          longitude: pos.coords.longitude.toFixed(6),
        };
        setTmpImage(updated);
        setIsPreview(true);
      },
      (err) => {
        console.warn("Geolocation failed:", err);
        setIsGettingLocation(false);
        setTmpImage(imageData);
        setIsPreview(true);
      },
      { timeout: 5000 }
    );
  };

  const handleRetake = () => {
    setIsPreview(false);
    setTmpImage(null);
    openCamera();
  };

  const handleKeep = () => {
    setIsTreeSelectModal(true);
  };

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 bg-black/70">
      <div
        className="max-w-md w-full h-full relative flex flex-col"
        style={{ backgroundColor: appTheme.secondaryPalette.darkTealGreen }}
      >
        {/* Header */}
        <div className="pt-4 px-6 flex-row flex items-center justify-between">
          <Image alt="Logo" src={logo} className="w-12 h-12 object-contain" />
          <Image
            alt="Close"
            src={close}
            onClick={() => router.push("/")}
            className="w-10 h-10 object-contain cursor-pointer opacity-40"
          />
        </div>

        {/* Camera Area */}
        <div className="flex-grow flex items-center justify-center p-4 relative">
          {!isPreview && (
            <div className="relative w-[90%] h-[80%]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                muted
                ref={playerRef}
              />
              <div className="absolute inset-4 rounded-lg pointer-events-none border-2 border-dashed border-white opacity-30" />
            </div>
          )}

          {isPreview && tmpImage && (
            <Image
              src={tmpImage.image}
              alt="Preview"
              className="w-[90%] h-[80%] object-cover"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
            />
          )}

          {isGettingLocation && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white px-6 py-4 rounded-lg">
              Getting location...
            </div>
          )}

          {isCameraLoading && !isPreview && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white px-6 py-4 rounded-lg">
              Loading camera...
            </div>
          )}
        </div>

        {/* Bottom Controls */}
        <div className="p-6">
          {!isPreview ? (
            <div
              className={`mx-auto w-16 h-16 relative ${
                cameraPermissionDenied
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              onClick={!cameraPermissionDenied ? captureImage : undefined}
            >
              <Image src={ellipse} alt="Ellipse" className="w-full h-full" />
              <Camera
                pathClassName="fill-[#FFFFFF]"
                overrideColor
                svgClassName="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-100"
              />
            </div>
          ) : (
            <div className="flex flex-row items-center justify-between gap-4">
              <button
                type="button"
                className="w-full text-base font-semibold py-3 rounded-3xl focus:outline-none border"
                style={{
                  color: appTheme.primaryPalette.white,
                  backgroundColor: appTheme.secondaryPalette.darkTealGreen,
                  borderColor: appTheme.secondaryPalette.darkForestGreen,
                }}
                onClick={handleRetake}
              >
                <div className="flex flex-row items-center justify-center gap-4">
                  <Image src={retake} alt="Retake" className="w-[1.3rem] h-[1.3rem]" />
                  Retake
                </div>
              </button>
              <button
                type="button"
                className="w-full text-base font-semibold py-3 rounded-3xl focus:outline-none"
                style={{
                  color: appTheme.primaryPalette.white,
                  backgroundColor: appTheme.secondaryPalette.darkForestGreen,
                }}
                onClick={handleKeep}
              >
                <div className="flex flex-row items-center justify-center gap-4">
                  <Image src={keep} alt="Keep" className="w-[0.9rem] h-[1.3rem]" />
                  Keep
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tree Selection Modal */}
      {isTreeSelectModal && (
        <div className="fixed inset-0 flex items-end justify-center z-50 bg-black/40">
          <div className="w-full max-w-md bg-white rounded-t-3xl p-6 max-h-[80%] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Select a Tree</h2>
            <input
              type="text"
              placeholder="Search tree..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 border rounded-md mb-4"
            />
            {filteredTrees.map((tree) => (
              <div
                key={tree.id}
                onClick={() => setSelectedTreeId(tree.id)}
                className={`p-3 rounded-md mb-2 cursor-pointer border ${
                  selectedTreeId === tree.id
                    ? "bg-green-100 border-green-400"
                    : "bg-gray-50"
                }`}
              >
                {tree.name}
              </div>
            ))}
            <button
              disabled={!selectedTreeId}
              onClick={() => {
                setIsTreeSelectModal(false);
                setIsStep2Modal(true);
              }}
              className={`w-full py-3 mt-4 rounded-3xl text-white font-semibold ${
                selectedTreeId
                  ? "bg-green-700 hover:bg-green-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2 Modal (Location) */}
      {isStep2Modal && (
        <div className="fixed inset-0 flex items-end justify-center z-50 bg-black/40">
          <div className="w-full max-w-md bg-white rounded-t-3xl p-6 max-h-[80%] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Set Location</h2>
            <button
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  (pos) =>
                    setLocation({
                      lat: pos.coords.latitude,
                      lon: pos.coords.longitude,
                    }),
                  (err) => console.warn(err)
                );
              }}
              className="w-full py-3 mb-4 rounded-lg bg-green-600 text-white font-semibold"
            >
              Auto Detect Location
            </button>

            <input
              type="text"
              placeholder="Latitude"
              value={location?.lat ?? ""}
              onChange={(e) =>
                setLocation((prev) => ({ ...prev!, lat: Number(e.target.value) }))
              }
              className="w-full p-3 mb-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Longitude"
              value={location?.lon ?? ""}
              onChange={(e) =>
                setLocation((prev) => ({ ...prev!, lon: Number(e.target.value) }))
              }
              className="w-full p-3 mb-2 border rounded-md"
            />

            <button
              onClick={() => {
                console.log("Final tree & location:", selectedTreeId, location);
                setIsStep2Modal(false);
                router.push("/"); // or next step
              }}
              className="w-full py-3 mt-4 rounded-3xl bg-green-700 text-white font-semibold"
            >
              Save & Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Capture;
