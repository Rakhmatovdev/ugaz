import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const ArrowRight:FC<svgProps> = ({
 width = 24,
 height = 24,
 viewBox = "0 0 24 24",
 onClick,
 className = "",
 style = {},
 strokeColor = "#141B34", // Default stroke color
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
                d="M19.0001 12L4.00012 12"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.9999 7L19.2928 11.2929C19.6262 11.6262 19.7928 11.7929 19.7928 12C19.7928 12.2071 19.6262 12.3738 19.2928 12.7071L14.9999 17"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowRight;
