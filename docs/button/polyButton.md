### 聚合按钮 poly-button

提供了带聚合样式的icon按钮

<template>
  <div class="row">
      <poly-button icon="github"></poly-button>
      <poly-button icon="weibo" color="orange"></poly-button>
      <poly-button icon="weixin" color="green"></poly-button>
      <poly-button icon="qq" color="blue"></poly-button>
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

| 参数 | 说明 | 可选值                  | 类型 | 默认值 |
| ----- | ---- | -------------------------- | ------ | ------ |
| icon  | 图标 | font-awesome图标         | string | -      |
| color | 颜色 | gray/red/yellow/green/blue | string | -      |