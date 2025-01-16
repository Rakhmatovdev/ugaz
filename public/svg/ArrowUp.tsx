
import { svgProps } from "../../src/utils/types";
import {FC} from "react";
const ArrowUp: FC<svgProps> = ({
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
                d="M5.99992 15L11.2928 9.70711C11.6262 9.37377 11.7928 9.20711 11.9999 9.20711C12.207 9.20711 12.3737 9.37377 12.707 9.70711L17.9999 15"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowUp;
