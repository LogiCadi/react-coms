# TipsBanner

横幅形式的消息提醒

## 效果

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d91e900e04534ccf8a731526bb514cf6~tplv-k3u1fbpfcp-watermark.image?)

## 使用

```tsx
import TipsBanner from ".";

export default function App() {
  return <TipsBanner onClose={() => console.log("close.")}>please do not defecate in public.</TipsBanner>;
}
```
