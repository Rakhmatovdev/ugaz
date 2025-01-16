import { FC } from "react";
import {svgProps} from "../../src/utils/types";

const Output: FC<svgProps> = ({
                                  width = 24,
                                  height = 24,
                                  fillColor = "#171429", // Default fill color
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
                d="M20.5 11.75C20.5 11.3358 20.1642 11 19.75 11C19.3358 11 19 11.3358 19 11.75C19 15.7541 15.7541 19 11.75 19C7.74593 19 4.5 15.7541 4.5 11.75C4.5 11.3358 4.16421 11 3.75 11C3.33579 11 3 11.3358 3 11.75C3 16.5825 6.91751 20.5 11.75 20.5C16.5825 20.5 20.5 16.5825 20.5 11.75Z"
                fill={fillColor}
            />
            <path
                d="M14.2197 7.28033C14.5126 7.57322 14.9874 7.57322 15.2803 7.28033C15.5732 6.98744 15.5732 6.51256 15.2803 6.21967L12.2803 3.21967C11.9874 2.92678 11.5126 2.92678 11.2197 3.21967L8.21967 6.21967C7.92678 6.51256 7.92678 6.98744 8.21967 7.28033C8.51256 7.57322 8.98744 7.57322 9.28033 7.28033L11 5.56066V13.75C11 14.1642 11.3358 14.5 11.75 14.5C12.1642 14.5 12.5 14.1642 12.5 13.75V5.56066L14.2197 7.28033Z"
                fill={fillColor}
            />
        </svg>
    );
};

export default Output;
