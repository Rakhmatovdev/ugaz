import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const FuelStation:FC<svgProps> = ({
                                             width = 24,
                                             height = 24,
                                             viewBox = "0 0 24 24",
                                             onClick,
                                             className = "",
                                             style = {},
                                             fillColor = "#69757A", // Default fill color
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
            fill={
            'none'
            }
        >
            <path
                d="M10.4626 13L9.06858 14.8124C8.91919 15.0066 9.02626 15.2861 9.26987 15.3378L10.7301 15.6477C10.9899 15.7028 11.0889 16.0122 10.9073 16.2011L9.17773 18"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 10L16 10"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 21L4 9C4 6.17157 4 4.75736 4.87868 3.87868C5.75736 3 7.17157 3 10 3C12.8284 3 14.2426 3 15.1213 3.87868C16 4.75736 16 6.17157 16 9L16 21L4 21Z"
                stroke={fillColor}
                strokeWidth="1.5"
            />
            <path
                d="M2 21L18 21"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16 14H17.6667C17.9767 14 18.1317 14 18.2588 14.0341C18.6039 14.1265 18.8735 14.3961 18.9659 14.7412C19 14.8683 19 15.0233 19 15.3333V16.5C19 17.3284 19.6716 18 20.5 18C21.3284 18 22 17.3284 22 16.5L22 10.2111C22 9.60998 22 9.30941 21.9142 9.02598C21.8284 8.74255 21.6616 8.49247 21.3282 7.9923L20.5547 6.83205C20.2082 6.31223 19.6247 6 19 6"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default FuelStation;