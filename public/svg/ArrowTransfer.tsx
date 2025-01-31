
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const ArrowTransferIcon: FC<svgProps> = ({
                                          width = 24,
                                          height = 24,
                                          viewBox = "0 0 24 24",
                                          onClick,
                                          className = "",
                                          style = {},
                                          strokeColor = "#69757A", // Customizable stroke color
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
                d="M19.5 9H6.97329C5.92408 9 5.39948 9 5.2731 8.68742C5.14672 8.37484 5.5239 8.01023 6.27826 7.28101L8.63793 5"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.5 15H17.0267C18.0759 15 18.6005 15 18.7269 15.3126C18.8533 15.6252 18.4761 15.9898 17.7217 16.719L15.3621 19"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowTransferIcon;
