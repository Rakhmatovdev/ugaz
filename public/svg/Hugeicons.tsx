
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const Hugeicons:FC<svgProps> = ({
                                           width = 24,
                                           height = 24,
                                           viewBox = "0 0 24 24",
                                           onClick,
                                           className = "",
                                           style = {},
                                           fillColor = "#69757A", // Default stroke color
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
                d="M3.891 3.891C5.282 2.5 7.521 2.5 12 2.5C16.478 2.5 18.718 2.5 20.109 3.891C21.5 5.282 21.5 7.521 21.5 12C21.5 16.478 21.5 18.718 20.109 20.109C18.718 21.5 16.479 21.5 12 21.5C7.522 21.5 5.282 21.5 3.891 20.109C2.5 18.718 2.5 16.479 2.5 12C2.5 7.522 2.5 5.282 3.891 3.891Z"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Hugeicons;