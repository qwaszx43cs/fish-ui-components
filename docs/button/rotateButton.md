### 旋转按钮 rotate-button

提供了带3D旋转样式的按钮

<template>
  <div class="row">
      <rotate-button type="top" icon="github">Github</rotate-button>
      <rotate-button type="right" icon="weibo" backgroundColor="orange">Weibo</rotate-button>
      <rotate-button type="bottom" icon="weixin" width="150" backgroundColor="green">Weixin</rotate-button>
      <rotate-button type="left" icon="qq" width="200" backgroundColor="blue">QQ</rotate-button>
  </div>
</template>

<style>

  .row {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
  }

  .row > * {
    margin-right: 20px;
  }
</style>

### Attributes

| 参数          | 说明   | 可选值                  | 类型 | 默认值 |
| --------------- | -------- | -------------------------- | ------ | ------ |
| type            | 旋转类型 | top/right/bottom/left      | string | -      |
| icon            | 图标   | font-awesome图标         | string | -      |
| width           | 宽度   | -                          | string | 100px  |
| backgroundColor | 颜色   | gray/red/yellow/green/blue | string | gray   |