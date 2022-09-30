import { HTMLAttributes } from "react";
import "../assets/index.css";
export declare type AnchorProps = {
    /** hover类型 */
    hoverStyleType?: "underline" | "opacity" | "bg-color";
} & HTMLAttributes<HTMLAnchorElement>;
/** a标签 */
export default function Anchor({ hoverStyleType, children, ...props }: AnchorProps): JSX.Element;
