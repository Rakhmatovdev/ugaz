
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const Hugeiconsc: FC<svgProps> = ({
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
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Hugeiconsc;
