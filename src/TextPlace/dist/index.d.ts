import { ReactNode } from "react";
export declare type TextPlaceProps = {
    value?: any;
    placeText?: ReactNode;
    children?: ReactNode;
};
/** 文本占位符 */
export default function TextPlace({ value, children, placeText }: TextPlaceProps): JSX.Element;
