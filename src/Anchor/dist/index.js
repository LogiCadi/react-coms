import { jsx as _jsx } from "react/jsx-runtime";
import "../assets/index.css";
/** a标签 */
export default function Anchor({ hoverStyleType, children, ...props }) {
    return (_jsx("a", Object.assign({ className: `rc-anchor rc-anchor-${hoverStyleType ?? "underline"}` }, props, { children: children }), void 0));
}
