import React, { HTMLAttributes } from "react";
import "../assets/index.css";

export type AnchorProps = {
  /** hover类型 */
  hoverStyleType?: "underline" | "opacity" | "bg-color";
} & HTMLAttributes<HTMLAnchorElement>;

/** a标签 */
export default function Anchor({ hoverStyleType, children, ...props }: AnchorProps) {
  return (
    <a className={`rc-anchor rc-${hoverStyleType ?? "opacity"}`} {...props}>
      {children}
    </a>
  );
}
