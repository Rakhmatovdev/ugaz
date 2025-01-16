import { FC } from "react";
import {svgProps} from "../../src/utils/types";

const MenuCircle: FC<svgProps> = ({
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
                d="M10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6Z"
                stroke={fillColor}
                strokeWidth="1.5"
            />
            <path
                d="M10 18C10 15.7909 8.20914 14 6 14C3.79086 14 2 15.7909 2 18C2 20.2091 3.79086 22 6 22C8.20914 22 10 20.2091 10 18Z"
                stroke={fillColor}
                strokeWidth="1.5"
            />
            <path
                d="M22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 8.20914 15.7909 10 18 10C20.2091 10 22 8.20914 22 6Z"
                stroke={fillColor}
                strokeWidth="1.5"
            />
            <path
                d="M22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18Z"
                stroke={fillColor}
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default MenuCircle;