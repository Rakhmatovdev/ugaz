import {FC} from "react";
import { svgProps } from "../../src/utils/types";

const AnalyticsIcon: FC<svgProps> = ({
width = 24,
height = 24,
viewBox = "0 0 24 24",
onClick,
className = "",
style = {},
strokeColor = "#141B34", // Customizable stroke color
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
                d="M7 17L7 13"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M12 17L12 7"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M17 17L17 11"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default AnalyticsIcon;
