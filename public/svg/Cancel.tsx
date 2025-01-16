import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const Cancel:FC<svgProps> = ({
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
                d="M19.0004 5L5.00043 19M5.00043 5L19.0004 19"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Cancel;
