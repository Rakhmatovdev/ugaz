
import { svgProps } from "../../src/utils/types";
import {FC} from "react";

const HugeiconsSetting: FC<svgProps> = ({
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
                d="M15.5 12C15.5 12.4596 15.4095 12.9148 15.2336 13.3394C15.0577 13.764 14.7999 14.1499 14.4749 14.4749C14.1499 14.7999 13.764 15.0577 13.3394 15.2336C12.9148 15.4095 12.4596 15.5 12 15.5C11.5404 15.5 11.0852 15.4095 10.6606 15.2336C10.236 15.0577 9.85013 14.7999 9.52513 14.4749C9.20012 14.1499 8.94231 13.764 8.76642 13.3394C8.59053 12.9148 8.5 12.4596 8.5 12C8.5 11.0717 8.86875 10.1815 9.52513 9.52513C10.1815 8.86875 11.0717 8.5 12 8.5C12.9283 8.5 13.8185 8.86875 14.4749 9.52513C15.1313 10.1815 15.5 11.0717 15.5 12Z"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.79 9.152C21.598 10.542 22 11.237 22 12C22 12.763 21.597 13.458 20.79 14.848L18.867 18.164C18.064 19.548 17.662 20.24 17.002 20.62C16.342 21 15.54 21 13.937 21H10.063C8.46 21 7.658 21 6.998 20.62C6.338 20.24 5.936 19.548 5.133 18.164L3.21 14.848C2.403 13.458 2 12.763 2 12C2 11.237 2.403 10.542 3.21 9.152L5.133 5.836C5.936 4.452 6.338 3.76 6.998 3.38C7.658 3 8.46 3 10.063 3H13.937C15.54 3 16.342 3 17.002 3.38C17.662 3.76 18.064 4.452 18.867 5.836L20.79 9.152Z"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default HugeiconsSetting;
