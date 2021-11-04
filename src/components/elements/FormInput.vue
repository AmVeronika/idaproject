<template>
<button class="form-input fs-12sb">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "form-input"
};
</script>

<style lang="scss">
.form-input {
  padding: 10px;
  text-align: center;
  color: white;
  background: #7BAE73;
  border-radius: 10px;
}
</style>