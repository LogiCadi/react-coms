import React, { HTMLAttributes } from 'react';
import '../assets/index.css';

export type AnchorProps = {
  /** hover类型 */
  hoverStyleType?: 'underline' | 'opacity' | 'bg-color';
} & HTMLAttributes<HTMLAnchorElement>;

/** a标签 */
export default function Anchor({ hoverStyleType, children, className, ...props }: AnchorProps) {
  return (
    <a {...props} className={`rc-anchor rc-anchor-${hoverStyleType ?? 'underline'} ${className}`}>
      {children}
    </a>
  );
}
