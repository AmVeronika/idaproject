<template>
  <button class="form-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "form-button"
};
</script>

<style lang="scss">
.form-btn {
  padding: 10px;
  text-align: center;
  color: $white;
  background: $btn-bg;
  border-radius: 10px;
  border: 1px solid $btn-bg;
  transition: 0.2s ease-out;
  &:disabled {
    color: $light-text;
    background: $btn-dis;
    border: 1px solid $btn-dis;
    &:hover {
      color: $light-text;
      background: $btn-dis;
      border: 1px solid $btn-dis;
      cursor: default;
    }
  }
  &:hover {
    color: $btn-bg;
    background: $white;
    border: 1px solid $btn-bg;
    transition: 0.2s ease-out;
  }
  &:active {
    background: $bg;
    transition: 0.2s ease-out;
  }
}
</style>