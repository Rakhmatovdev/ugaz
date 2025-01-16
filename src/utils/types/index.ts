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