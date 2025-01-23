
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const HugeiconsFuel:FC<svgProps> = ({
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
            fill="none"
        >
            <path
                d="M10.463 13L9.069 14.812C9.03449 14.8567 9.01202 14.9095 9.00374 14.9653C8.99546 15.0212 9.00165 15.0782 9.02171 15.131C9.04178 15.1838 9.07505 15.2305 9.11835 15.2668C9.16165 15.303 9.21352 15.3275 9.269 15.338L10.73 15.648C10.7885 15.659 10.8429 15.6856 10.8875 15.725C10.9321 15.7643 10.9652 15.8151 10.9834 15.8717C11.0015 15.9284 11.004 15.9889 10.9905 16.0469C10.9771 16.1048 10.9482 16.1581 10.907 16.201L9.177 18M4 10H16"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 21H18M16 14H17.667C17.977 14 18.132 14 18.259 14.034C18.4285 14.0794 18.5831 14.1687 18.7072 14.2928C18.8313 14.4169 18.9206 14.5715 18.966 14.741C19 14.868 19 15.023 19 15.333V16.5C19 16.8978 19.158 17.2794 19.4393 17.5607C19.7206 17.842 20.1022 18 20.5 18C20.8978 18 21.2794 17.842 21.5607 17.5607C21.842 17.2794 22 16.8978 22 16.5V10.211C22 9.61 22 9.309 21.914 9.026C21.828 8.743 21.662 8.492 21.328 7.992L20.555 6.832C20.3842 6.57611 20.153 6.36631 19.8817 6.22118C19.6105 6.07605 19.3076 6.00008 19 6M4 21V9C4 6.172 4 4.757 4.879 3.879C5.757 3 7.172 3 10 3C12.828 3 14.243 3 15.121 3.879C16 4.757 16 6.172 16 9V21H4Z"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default HugeiconsFuel;
