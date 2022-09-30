import { HTMLAttributes } from "react";
import "../assets/index.css";

export type AnchorProps = {
  /** hover类型 */
  hoverStyleType?: "underline" | "opacity" | "bg-color";
} & HTMLAttributes<HTMLAnchorElement>;

/** a标签 */
export default function Anchor(props: AnchorProps) {
  return (
    <a className={`rc-anchor rc-${props.hoverStyleType ?? "underline"}`} {...props}>
      {props.children}
    </a>
  );
}
