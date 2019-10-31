<template>
  <div id="app">
    <HelloWorld
      msg="哇偶"
      desc="aqua 卡哇伊!!!"
    />
    <List
      :list="list"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from '@/components/List.vue'

export default {
  name: 'app',
  data() {
    return {
      list: [
        '测试', '一二三', '哈哈'
      ]
    }
  },
  components: {
    HelloWorld,
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
