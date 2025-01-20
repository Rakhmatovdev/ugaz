
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const ArrowDown: FC <svgProps> = ({
                                           width = 24,
                                           height = 24,
                                           viewBox = "0 0 24 24",
                                           onClick,
                                           className = "",
                                           style = {},
                                           strokeColor = "#3ABAAA", // Default stroke color
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
            fill={"none"}
        >
            <path
                d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowDown;
