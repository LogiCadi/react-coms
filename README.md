# react-coms

some components using React + Typescript

# 发布一个 react 组件到 npm 仓库

我们经常写一些组件想共享给大家使用，那把它发布到 npm 包仓库是一个很好的办法

这里我们使用的是 `react`,所以可以用 `create-react-app` 把项目跑起来

```sh
npx create-react-app my-react-coms --template typescript
```

我们写一个小组件`TipsBanner`,作用是展示一个带警告的消息，并可以关闭
