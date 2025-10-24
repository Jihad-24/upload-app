// components/PlantedTreesModal.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import { appTheme } from "@/app/plugins/appTheme";
import arrowIcon from "@/assets/arrow.svg";
import { DetailsHeader } from "./DetailsHeader";

type Tree = {
  id: number;
  name: string;
  speciesId: number;
  lat: number;
  lon: number;
  date: string;
  cost: string;
  image: StaticImageData;
};

type Props = {
  title: string;
  trees: Tree[];
  onClose: () => void;
};

export const PlantedTreesModal: React.FC<Props> = ({ title, trees, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-end z-50">
      <div
        className="w-full max-w-md rounded-t-3xl bg-white shadow-lg flex flex-col"
        style={{ maxHeight: "75vh" }}
      >
        <DetailsHeader title={title} count={trees.length} onClose={onClose} draggable />

        <div
          className="flex-1 overflow-y-auto px-3 pb-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {trees.map((tree) => (
            <div
              key={tree.id}
              className="flex items-center justify-between mb-4 py-2 px-1 rounded-xl"
            >
              <div className="flex items-start gap-5">
                <div className="w-20 h-[120px] relative overflow-hidden rounded-lg cursor-pointer">
                  <Image src={tree.image} alt={tree.name} fill className="object-cover" />
                </div>

                <div className="text-base font-sans">
                  <p className="font-semibold">{tree.name}</p>
                  <p className="text-gray-600 text-sm">
                    Native | Species ID: {tree.speciesId}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {tree.lat}, {tree.lon}
                  </p>
                  <p className="text-gray-500 text-sm">{tree.date}</p>
                  <p className="text-gray-700 text-sm">Cost: {tree.cost}</p>
                </div>
              </div>

              <button
                className="flex items-center justify-center w-7 h-7 rounded-full cursor-pointer"
                style={{
                  backgroundColor:
                    appTheme.secondaryPalette.brownishTan || "#cbb29e",
                }}
              >
                <Image src={arrowIcon} alt="Details" width={16} height={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
