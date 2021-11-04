<template>
  <section :class="$style['add-form']">
    <h1 class="add-form__title fs-28">Добавление товара</h1>
    <OveralForm></OveralForm>
  </section>
</template>

<script>
import OveralForm from "./OveralForm";

export default {
  name: "AddForm",
  components: {
    OveralForm
  },
  data() {
    return {
    }
  },
};
</script>

<style lang="scss" module>
.add-form{
display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
