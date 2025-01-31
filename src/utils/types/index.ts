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
    start_date:string | Date
    end_date:string | Date
    region_code?:string
    status:number| string
    period:string
    all:boolean
}