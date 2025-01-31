import {svgProps} from "../../src/utils/types";
import {FC} from "react";

const HeadPhone: FC<svgProps> = ({
                                     width = 20,
                                     height = 20,
                                     viewBox = "0 0 20 20",
                                     onClick,
                                     className = "",
                                     style = {},
                                     fillColor = "#141B34", // Default fill color
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
            fill={'none'}
        >
            <path
                d="M14.1667 11.9207C14.1667 11.6327 14.1667 11.4887 14.2101 11.3603C14.3361 10.9874 14.6682 10.8426 15.001 10.6911C15.3751 10.5207 15.5621 10.4355 15.7474 10.4205C15.9578 10.4035 16.1686 10.4488 16.3484 10.5497C16.5868 10.6835 16.7531 10.9378 16.9233 11.1445C17.7095 12.0994 18.1025 12.5768 18.2464 13.1033C18.3624 13.5282 18.3624 13.9725 18.2464 14.3974C18.0366 15.1653 17.3738 15.809 16.8832 16.4048C16.6323 16.7096 16.5068 16.862 16.3484 16.9509C16.1686 17.0518 15.9578 17.0972 15.7474 17.0802C15.5621 17.0652 15.3751 16.98 15.001 16.8096C14.6682 16.658 14.3361 16.5133 14.2101 16.1404C14.1667 16.012 14.1667 15.868 14.1667 15.5799V11.9207Z"
                stroke={fillColor}
                strokeWidth="1.5"
            />
            <path
                d="M5.83342 11.9208C5.83342 11.5581 5.82323 11.2322 5.53001 10.9772C5.42335 10.8844 5.28196 10.82 4.99917 10.6912C4.62509 10.5208 4.43805 10.4356 4.25272 10.4206C3.69668 10.3757 3.39751 10.7552 3.07685 11.1446C2.29071 12.0995 1.89763 12.5769 1.7538 13.1034C1.63773 13.5283 1.63773 13.9726 1.7538 14.3975C1.96358 15.1654 2.62635 15.8091 3.11692 16.405C3.42615 16.7805 3.72156 17.1233 4.25272 17.0803C4.43805 17.0653 4.62509 16.9801 4.99917 16.8097C5.28196 16.6809 5.42335 16.6165 5.53001 16.5238C5.82323 16.2688 5.83342 15.9428 5.83342 15.5801V11.9208Z"
                stroke={fillColor}
                strokeWidth="1.5"
            />
            <path
                d="M15.8334 10.417V8.75033C15.8334 5.52866 13.2217 2.91699 10.0001 2.91699C6.77842 2.91699 4.16675 5.52866 4.16675 8.75033V10.417"
                stroke={fillColor}
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    );
};


export default HeadPhone;
