import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import info from "../assets/info.svg";
import close from "../assets/close.svg";
import "../assets/index.css";
/** 横幅形式的消息提醒 */
export default function TipsBanner({ children, onClose }) {
    return (_jsxs("div", { className: "rc-tips-banner", children: [_jsx("img", { src: info, alt: "" }), _jsx("div", { className: "rc-tips-banner-content", children: children }), !!onClose && _jsx("img", { className: "rc-tips-banner-close", src: close, alt: "", onClick: onClose })] }));
}
