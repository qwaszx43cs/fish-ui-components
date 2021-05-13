<template>
  <!-- 翻转样式按钮 -->
  <div class="rotate-button">
    <button
      :class="['btn', `btn--${type}`]"
      :style="{ width: width + 'px', 'background-color': backgroundColor }"
      @click="handleClick"
    >
      <i v-if="icon" :class="['fa', `fa-${icon}`]"></i>
      <!-- 判断是否有slot，若有slot传入都有default属性 -->
      <span v-if="$slots.default"><slot></slot></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'RotateButton',
  props: {
    type: { // 类型
      type: String,
      default: 'default'
    },
    icon: { // 图标
      type: String
    },
    width: {}, // 按钮宽度
    backgroundColor: { // 背景颜色
      type: String,
      default: 'gray'
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');

  .rotate-button {
    perspective: 1000px;
  }

  .btn {
    display: block;
    height: 40px;
    min-width: 100px;
    box-sizing: border-box;
    padding: 0 10px;
    cursor: pointer;
    white-space: nowrap;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .3s linear;
  }

  i {
    margin-right: 5px;
  }

  .btn--top:hover {
    transform: rotateX(15deg);
    box-shadow: 0 10px 10px #a9a9a9;
  }

  .btn--right:hover {
    transform: rotateY(15deg);
    box-shadow: -10px 0 10px #a9a9a9;
  }

  .btn--bottom:hover {
    transform: rotateX(-15deg);
    box-shadow: 0 -10px 10px #a9a9a9;
  }

  .btn--left:hover {
    transform: rotateY(-15deg);
    box-shadow: 10px 0 10px #a9a9a9;
  }

</style>
