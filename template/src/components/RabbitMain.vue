<template>
  <div class="r-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RabbitMain"
};
</script>

<style lang="less" scoped>
.r-main {
  height: 100%;
  position: relative;
  overflow: auto;
}
</style>