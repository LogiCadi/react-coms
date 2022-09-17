import { ReactNode } from "react";
import "../assets/index.css";
export declare type TipsBannerProps = {
    children: ReactNode;
    onClose?: () => void;
};
/** 横幅形式的消息提醒 */
export default function TipsBanner({ children, onClose }: TipsBannerProps): JSX.Element;
