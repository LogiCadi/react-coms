import { jsx as _jsx } from "react/jsx-runtime";
import '../assets/index.css';
/** a标签 */
export default function Anchor({ hoverStyleType, children, className, ...props }) {
    return (_jsx("a", Object.assign({}, props, { className: `rc-anchor rc-anchor-${hoverStyleType ?? 'underline'} ${className}` }, { children: children }), void 0));
}
