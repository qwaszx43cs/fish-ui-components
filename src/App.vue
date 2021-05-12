<template>
  <div id="app">
    <div class="row">
      <rotate-button type="top" icon="github" @click="fn">Github</rotate-button>
      <rotate-button type="right" icon="weibo" backgroundColor="orange">Weibo</rotate-button>
      <rotate-button type="bottom" icon="weixin" width="150" backgroundColor="green">Weixin</rotate-button>
      <rotate-button type="left" icon="qq" width="200" backgroundColor="blue">QQ</rotate-button>
    </div>
    <div class="row">
      <poly-button icon="github"></poly-button>
      <poly-button icon="weibo" color="orange"></poly-button>
      <poly-button icon="weixin" color="green"></poly-button>
      <poly-button icon="qq" color="blue"></poly-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn () {
      alert('toggle')
    }
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

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

  .row:nth-child(odd) {
    background-color: #fff;
  }

  .row:nth-child(even) {
    background-color: #e7e7e7;
  }
</style>
