<template>
  <div class="list-wrap">
    <div class="list-wrap-content">
      <div
        class="list-item"
        v-for="(item, index) in list"
        :key="index"
      >
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style>

</style>