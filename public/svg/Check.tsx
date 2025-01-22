import React from 'react';

interface CheckIconProps {
  strokeColor?: string;
  strokeWidth?: number;
  size?: number; // Unified width and height
  backgroundColor?: string;
  borderRadius?: string;
  className?: string;
  onClick?: () => void; // For interactivity
}

const CheckIcon: React.FC<CheckIconProps> = ({
  strokeColor = 'white',
  strokeWidth = 1.5,
  size = 20, // Default size applies to both width and height
  backgroundColor = '#4A90E2',
  borderRadius = '4.5px',
  className = '',
  onClick,
}) => {
  const iconSize = size * 0.6; // Maintain consistent scaling for the SVG

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor,
        borderRadius,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default', // Add pointer cursor if onClick is provided
      }}
      className={`${className}`}
      onClick={onClick}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_di_4825_12387)">
          <path
            d="M10 5L5.875 9L4 7.18182"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_di_4825_12387"
            x="2.25"
            y="3.75"
            width="9.5"
            height="7.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4825_12387"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4825_12387"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.25" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_4825_12387"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default CheckIcon;
