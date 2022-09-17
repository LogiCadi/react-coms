import { ReactNode } from "react";
import info from "../assets/info.svg";
import close from "../assets/close.svg";
import "../assets/index.css";

export type TipsBannerProps = {
  children: ReactNode;
  onClose?: () => void;
};

/** 横幅形式的消息提醒 */
export default function TipsBanner({ children, onClose }: TipsBannerProps) {
  return (
    <div className="rc-tips-banner">
      <img src={info} alt="" />
      <div className="rc-tips-banner-content">{children}</div>
      {!!onClose && <img className="rc-tips-banner-close" src={close} alt="" onClick={onClose} />}
    </div>
  );
}
