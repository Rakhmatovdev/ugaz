import { FC } from "react";
import {svgProps} from "../../src/utils/types";
const Location: FC<svgProps> = ({
                                    width = 24,
                                    height = 24,
                                    fillColor = "#69757A", // Default fill color
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
                d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                stroke={fillColor}
                strokeWidth="1.5"
            />
            <path
                d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z"
                stroke={fillColor}
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default Location;