// components/PlantedTreesModal.tsx
"use client";

import Image from "next/image";
import { appTheme } from "@/app/plugins/appTheme";
import { DetailsHeader } from "./DetailsHeader";
import logo from "@/assets/logo-black.png";
import divider from "@/assets/divider.svg";

type Props = {
  onClose: () => void;
};
export const UserModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-end z-50">
      <div
        className="w-full max-w-md rounded-t-3xl bg-white shadow-lg flex flex-col"
        style={{ maxHeight: "75vh" }}
      >
        <DetailsHeader title="" onClose={onClose} draggable />

        <div
          className="flex-1 overflow-y-auto px-3 pb-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex items-center justify-between  pl-10 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-20 h-[100px] relative overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={logo}
                  alt="Logo"
                  width={60}
                  height={60}
                  className="mb-6"
                />{" "}
              </div>

              <div className="pt-2">
                <h1
                  className="text-2xl font-bold mb-1"
                  style={{ color: appTheme.secondaryPalette.darkSlateGray }}
                >
                  Replant_World
                </h1>
                <h5
                  className="text-base font-normal"
                  style={{
                    color: appTheme.secondaryPalette.smokeGray,
                    opacity: 0.8,
                  }}
                >
                  Replant World User
                </h5>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="600"
                height="600"
                viewBox="0 0 600 600"
                version="1.1"
                className="h-5 w-5"
              >
                <path
                  d="M 280.500 50.621 C 237.076 57.052, 204.809 72.926, 176.080 101.993 C 152.794 125.552, 136.918 155.803, 129.895 190 C 126.549 206.295, 126.505 233.672, 129.801 248.763 C 141.714 303.300, 182.083 391.370, 248.857 508.500 C 263.558 534.289, 268.394 540.109, 279.804 545.748 C 286.428 549.021, 288.253 549.462, 296.707 549.832 C 311.901 550.497, 324.305 545.818, 333.695 535.881 C 341.630 527.485, 393.388 433.433, 417.550 383.506 C 457.662 300.619, 474.274 249.945, 472.628 215.500 C 469.552 151.139, 432.258 94.576, 374.717 67 C 349.501 54.915, 332.123 50.910, 303 50.471 C 292.275 50.309, 282.150 50.377, 280.500 50.621 M 289.778 112.123 C 230.618 116.771, 184.723 168.900, 187.320 228.500 C 188.154 247.644, 191.527 260.333, 200.271 277.229 C 214.981 305.653, 241.132 325.969, 273.660 334.244 C 281.272 336.180, 285 336.484, 300.500 336.435 C 316.708 336.384, 319.473 336.115, 328.277 333.740 C 368.042 323.010, 399.060 291.932, 409.047 252.814 C 418.360 216.340, 409.463 178.833, 384.620 149.834 C 367.188 129.486, 337.497 114.190, 312 112.423 C 307.875 112.137, 303.375 111.781, 302 111.631 C 300.625 111.482, 295.125 111.703, 289.778 112.123"
                  stroke="none"
                  fill-rule="evenodd"
                  className="fill-[#1B2924]"
                ></path>
              </svg>
              <span
                className=""
                style={{
                  color: appTheme.secondaryPalette.slateGray,
                }}
              >
                Global
              </span>
            </div>
            <Image
              src={divider}
              alt="Divider"
              className="w-px h-7 object-contain"
              width={1}
              height={24}
            />
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="600"
                height="600"
                viewBox="0 0 600 600"
                version="1.1"
                className="h-5 w-5"
              >
                <path
                  d="M 106.653 51.430 C 101.672 54.145, 91.538 62.687, 84.710 69.924 C 48.721 108.074, 40.711 160.518, 60.563 228.022 C 69.991 260.080, 88.416 298.282, 108.633 327.691 C 147.179 383.760, 187.201 426.907, 235.611 464.583 C 265.376 487.748, 288.649 503.024, 313 515.381 C 345.446 531.846, 376.004 542.412, 406 547.539 C 420.240 549.973, 448.208 550.541, 460.500 548.646 C 494.663 543.379, 523.601 526.563, 543.656 500.323 L 549.500 492.676 549.213 467.088 C 549.056 453.015, 548.447 439.706, 547.861 437.513 C 547.274 435.318, 545.381 432.222, 543.648 430.624 C 541.447 428.595, 522.452 420.220, 480.506 402.787 C 447.510 389.073, 419.288 377.608, 417.792 377.308 C 410.246 375.799, 409.003 376.707, 382.291 403.227 C 353.046 432.262, 356.688 430.602, 341.131 421.986 C 303.936 401.385, 263.488 369.973, 237.962 341.864 C 214.995 316.575, 193.431 286.645, 177.538 258 C 169.467 243.454, 167.850 246.842, 196.773 217.709 C 223.293 190.997, 224.201 189.754, 222.692 182.208 C 221.635 176.926, 172.321 59.757, 169.927 56.842 C 165.947 51.996, 161.866 51.270, 134.500 50.543 C 112.938 49.970, 109.108 50.092, 106.653 51.430"
                  stroke="none"
                  fill-rule="evenodd"
                  className="fill-[#1B2924]"
                ></path>
              </svg>
              <span
                className=""
                style={{
                  color: appTheme.secondaryPalette.slateGray,
                }}
              >
                {" "}
                Not provided
              </span>
            </div>
          </div>
          <div className="px-4 pt-4">
            <button
              type="submit"
              className="w-full text-base font-medium py-3 mt-1 rounded-3xl focus:outline-none cursor-pointer"
              aria-label="Logout"
              style={{
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(58, 89, 92)",
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
