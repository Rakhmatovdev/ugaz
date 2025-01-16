
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const Help: FC<svgProps> = ({
                                      width = 20,
                                      height = 20,
                                      viewBox = "0 0 20 20",
                                      onClick,
                                      className = "",
                                      style = {},

                                      fillColor = "#171429", // Default fill color
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
            fill={'none'}
        >
            <g clipPath="url(#clip0_462_11125)">
                <circle
                    cx="10.0001"
                    cy="10.0003"
                    r="8.33333"
                    stroke={fillColor}
                    strokeWidth="1.5"
                />
                <path
                    d="M8.3335 7.50065C8.3335 6.58018 9.07969 5.83398 10.0002 5.83398C10.9206 5.83398 11.6668 6.58018 11.6668 7.50065C11.6668 7.83244 11.5699 8.14159 11.4028 8.40131C10.9047 9.17538 10.0002 9.91351 10.0002 10.834V11.2507"
                    stroke={fillColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.99349 14.167H10.001H9.99349Z"
                    fill="#F8FAFB"
                />
                <path
                    d="M9.99349 14.167H10.001"
                    stroke={fillColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_462_11125">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Help;
