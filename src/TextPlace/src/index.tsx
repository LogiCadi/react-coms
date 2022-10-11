import React, { ReactNode } from "react";

export type TextPlaceProps = {
  value?: any;
  placeText?: ReactNode;
  children?: ReactNode;
};

/** 文本占位符 */
export default function TextPlace({ value, children, placeText }: TextPlaceProps) {
  return <>{value ?? children ? children : placeText ?? "-"}</>;
}
