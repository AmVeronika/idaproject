<template>
  <section class="add-form">
    <h1 class="add-form__title fs-28">Добавление товара</h1>
    <overal-form></overal-form>
  </section>
</template>

<script>
export default {
  name: "AddForm",
  data() {
    return {
    }
  },
};
</script>

<style lang="scss">
.add-form{
display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
