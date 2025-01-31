
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const HugeiconsFilter:FC<svgProps> = ({
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
                d="M3 7H6M6 7C6 6.068 6 5.602 6.152 5.235C6.25251 4.99218 6.3999 4.77155 6.58572 4.58572C6.77155 4.3999 6.99218 4.25251 7.235 4.152C7.602 4 8.068 4 9 4C9.932 4 10.398 4 10.765 4.152C11.0078 4.25251 11.2284 4.3999 11.4143 4.58572C11.6001 4.77155 11.7475 4.99218 11.848 5.235C12 5.602 12 6.068 12 7C12 7.932 12 8.398 11.848 8.765C11.7475 9.00782 11.6001 9.22845 11.4143 9.41428C11.2284 9.6001 11.0078 9.74749 10.765 9.848C10.398 10 9.932 10 9 10C8.068 10 7.602 10 7.235 9.848C6.99218 9.74749 6.77155 9.6001 6.58572 9.41428C6.3999 9.22845 6.25251 9.00782 6.152 8.765C6 8.398 6 7.932 6 7ZM3 17H9M18 17H21M18 17C18 16.068 18 15.602 17.848 15.235C17.7475 14.9922 17.6001 14.7716 17.4143 14.5857C17.2284 14.3999 17.0078 14.2525 16.765 14.152C16.398 14 15.932 14 15 14C14.068 14 13.602 14 13.235 14.152C12.9922 14.2525 12.7716 14.3999 12.5857 14.5857C12.3999 14.7716 12.2525 14.9922 12.152 15.235C12 15.602 12 16.068 12 17C12 17.932 12 18.398 12.152 18.765C12.2525 19.0078 12.3999 19.2284 12.5857 19.4143C12.7716 19.6001 12.9922 19.7475 13.235 19.848C13.602 20 14.068 20 15 20C15.932 20 16.398 20 16.765 19.848C17.0078 19.7475 17.2284 19.6001 17.4143 19.4143C17.6001 19.2284 17.7475 19.0078 17.848 18.765C18 18.398 18 17.932 18 17ZM15 7H21"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default HugeiconsFilter;
