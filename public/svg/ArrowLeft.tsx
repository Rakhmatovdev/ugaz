
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const ArrowLeft:FC<svgProps> = ({
                                           width = 24,
                                           height = 24,
                                           viewBox = "0 0 24 24",
                                           onClick,
                                           className = "",
                                           style = {},
                                           strokeColor = "#69757A", // Default stroke color
                                       }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            className={className}
            style={style}
        >
            <path
                d="M4.99979 12L19.9998 11.9998"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.99979 7L4.70689 11.2929C4.37356 11.6262 4.20689 11.7929 4.20689 12C4.20689 12.2071 4.37356 12.3738 4.70689 12.7071L8.99979 17"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowLeft;
