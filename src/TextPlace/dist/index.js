import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/** 文本占位符 */
export default function TextPlace({ value, children, placeText }) {
    return _jsx(_Fragment, { children: Boolean(value ?? children) ? children : placeText ?? "-" }, void 0);
}
