import { FC } from "react";
import {svgProps} from "../../src/utils/types";
const LegalHammer: FC<svgProps> = ({
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
                d="M11.9983 2C9.14883 2 7.30123 4.01899 5.11615 4.7549C4.22768 5.05413 3.78345 5.20374 3.60366 5.41465C3.42388 5.62556 3.37124 5.93375 3.26595 6.55013C2.13925 13.146 4.6019 19.244 10.475 21.6175C11.106 21.8725 11.4216 22 12.0014 22C12.5812 22 12.8967 21.8725 13.5277 21.6175C19.4005 19.2439 21.8608 13.146 20.7338 6.55013C20.6284 5.93364 20.5758 5.6254 20.3959 5.41449C20.2161 5.20358 19.7719 5.05405 18.8835 4.75499C16.6976 4.01915 14.8479 2 11.9983 2Z"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.8333 12.1667C12.8883 13.2216 14.2778 14.2937 14.2778 14.2937L16.1825 12.3889C16.1825 12.3889 15.1105 10.9994 14.0556 9.94444C13.0006 8.8895 11.6111 7.81746 11.6111 7.81746L9.70635 9.72222C9.70635 9.72222 10.7784 11.1117 11.8333 12.1667ZM11.8333 12.1667L8.5 15.5M16.5 12.0714L13.9603 14.6111M11.9286 7.5L9.38889 10.0397"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default LegalHammer;
