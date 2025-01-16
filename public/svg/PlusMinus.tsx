import { FC } from "react";
import {svgProps} from "../../src/utils/types";



const PlusMinus: FC<svgProps> = ({
                                     width = 24,
                                     height = 24,
                                     strokeColor = "#171429", // Default stroke color
                                     style = {},
                                     onClick,
                                     className = "",
                                 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            className={className}
            style={style}
        >
            <path
                d="M12 7.5V13.8636M15.5 10.6818H8.5M15.5 16.5H8.5"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke={strokeColor}
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default PlusMinus;
