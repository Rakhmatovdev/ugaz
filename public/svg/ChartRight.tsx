
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const ChartRight:FC<svgProps> = ({
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
            fill={'none'}
            style={style}
        >
            <path
                d="M9 9L5 5M16 12H22M12 16V22"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="4" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="12" cy="12" r="10" stroke={strokeColor} strokeWidth="1.5" />
        </svg>
    );
};

export default ChartRight;
