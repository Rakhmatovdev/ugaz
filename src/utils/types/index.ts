import React from "react";


export interface ChildrenProps {
    children: React.ReactNode;
}
export interface svgProps {
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    fillColor?: string;
    strokeColor?:string
}

export type TChart={
    id:string | number
    start_date:string
    end_date:string
    region_code:string
}