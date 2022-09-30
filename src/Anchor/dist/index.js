import { jsx as _jsx } from "react/jsx-runtime";
import "../assets/index.css";
/** a标签 */
export default function Anchor(props) {
    return (_jsx("a", Object.assign({ className: `rc-anchor rc-${props.hoverStyleType ?? "underline"}` }, props, { children: props.children }), void 0));
}
