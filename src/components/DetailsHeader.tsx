import React from 'react';
import closeIcon from '@/assets/close.svg';
import drag from '@/assets/drag.svg';
import { appTheme } from '@/app/plugins/appTheme';
import Image from 'next/image';

type Props = {
  title: string;
  count?: number;
  onClose: () => void;
  draggable?: boolean;
  onTouchStart?: (e: React.TouchEvent) => void;
  onTouchMove?: (e: React.TouchEvent) => void;
  onTouchEnd?: () => void;
};

export const DetailsHeader: React.FC<Props> = ({
  title,
  count,
  onClose,
  draggable = false,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  // simple local label map (you can extend this later)
  const fmtMsg = {
    trees: 'Trees',
  };

  return (
    <div className="relative pb-2">
      {draggable && (
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={drag}
            alt="Draggable"
            className="w-12 h-8 cursor-pointer touch-none"
            style={{
              touchAction: 'none',
              userSelect: 'none',
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          />
        </div>
      )}
      <div className="flex justify-between items-start p-6 pb-2">
        <div className="flex flex-col space-y-1 mt-2">
          <h6
            className="text-medium font-bold"
            style={{
              color: appTheme.primaryPalette.black,
            }}
          >
            {title}
          </h6>
          <h6
            className="text-sm font-medium"
            style={{
              color: appTheme.secondaryPalette.slateGray,
            }}
          >
            {count !== undefined ? `${count} ${fmtMsg.trees}` : ''}
          </h6>
        </div>
        <button onClick={onClose} className='cursor-pointer'>
          <Image src={closeIcon} alt="Close" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
