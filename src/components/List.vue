<template>
  <div class="list-wrap">
    <ul class="list-wrap-content">
      <li
        class="list-item"
        v-for="(item, index) in list"
        :key="index"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>

</style>