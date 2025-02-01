import React from "react";

type ChevronRightIconProps = Readonly<{
  className?: string;
  width?: number;
  height?: number;
}>;

function ChevronRightIcon({ className, width = 12, height = 9 }: ChevronRightIconProps) {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.25 4.39844L2.0625 7.58594C1.82812 7.82031 1.47656 7.82031 1.26562 7.58594L0.726562 7.07031C0.515625 6.83594 0.515625 6.48438 0.726562 6.27344L3 4.02344L0.726562 1.75C0.515625 1.53906 0.515625 1.1875 0.726562 0.953125L1.26562 0.414062C1.47656 0.203125 1.82812 0.203125 2.0625 0.414062L5.25 3.60156C5.46094 3.83594 5.46094 4.1875 5.25 4.39844Z" fill="currentColor" />
    </svg>
  );
}

export default ChevronRightIcon;
