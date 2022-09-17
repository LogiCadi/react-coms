import { ReactNode } from "react";
import info from "./info.svg";
import close from "./close.svg";
import "./index.css";

export type TipsBannerProps = {
  children: ReactNode;
  onClose?: () => void;
};

export default function TipsBanner({ children, onClose }: TipsBannerProps) {
  return (
    <div className="rc-tips-banner">
      <img src={info} alt="" />
      <div className="rc-tips-banner-content">{children}</div>
      {!!onClose && <img className="rc-tips-banner-close" src={close} alt="" onClick={onClose} />}
    </div>
  );
}
