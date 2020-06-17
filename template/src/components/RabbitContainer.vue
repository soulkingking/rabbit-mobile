<template>
  <div class="r-container">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "RabbitContainer"
};
</script>

<style lang="less" scoped>
.r-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>