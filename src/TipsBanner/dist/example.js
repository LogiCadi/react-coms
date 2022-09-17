import { jsx as _jsx } from "react/jsx-runtime";
import TipsBanner from ".";
export default function App() {
    return _jsx(TipsBanner, { onClose: () => console.log("close."), children: "\u8BF7\u52FF\u968F\u5730\u5927\u5C0F\u4FBF\uFF01" });
}
