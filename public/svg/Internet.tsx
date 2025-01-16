import { FC } from "react";
import {svgProps} from "../../src/utils/types";



const Internet: FC<svgProps> = ({
                                    width = 20,
                                    height = 20,
                                    strokeColor = "#141B34", // Default stroke color
                                    style = {},
                                    onClick,
                                    className = "",
                                }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            className={className}
            style={style}
        >
            <g clipPath="url(#clip0_860_7380)">
                <circle
                    cx="10.0001"
                    cy="10.0003"
                    r="8.33333"
                    stroke={strokeColor}
                    strokeWidth="1.5"
                />
                <ellipse
                    cx="10.0001"
                    cy="10.0003"
                    rx="3.33333"
                    ry="8.33333"
                    stroke={strokeColor}
                    strokeWidth="1.5"
                />
                <path
                    d="M1.66675 10H18.3334"
                    stroke={strokeColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_860_7380">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Internet;
