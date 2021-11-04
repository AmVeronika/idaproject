<template>
  <form :class="$style['add-form__wrap']">
    <label :class="$style['add-form__label']">
      <span :class="['fs-10', $style['add-form__label-required']]"
        >Наименование товара</span
      >
      <input
        :class="['fs-12', $style['add-form__input']]"
        type="text"
        placeholder="Введите наименование товара"
        v-model="nameGood"
      />
    </label>
    <label :class="$style['add-form__label']">
      <span class="fs-10">Описание товара</span>
      <textarea
        :class="[
          'fs-12',
          $style['add-form__input'],
          $style['add-form__input-resize'],
        ]"
        placeholder="Введите описание товара"
        v-model="descriptionGood"
      ></textarea>
    </label>
    <label :class="$style['add-form__label']">
      <span :class="['fs-10', $style['add-form__label-required']]"
        >Ссылка на изображение товара</span
      >
      <input
        :class="['fs-12', $style['add-form__input']]"
        type="url"
        placeholder="Введите ссылку"
        v-model="urlGood"
      />
    </label>
    <label :class="$style['add-form__label']">
      <span :class="['fs-10', $style['add-form__label-required']]"
        >Цена товара</span
      >
      <input
        :class="['fs-12', $style['add-form__input']]"
        type="number"
        placeholder="Введите цену"
        v-model="priceGood"
      />
    </label>
    <form-button :disabled="verificationOfFillingForm"
      >Добавить товар</form-button
    >
  </form>
</template>

<script>
export default {
  name: "OveralForm",
  components: {},
  data() {
    return {
      nameGood: "",
      descriptionGood: "",
      urlGood: "",
      priceGood: "",
    };
  },
  mounted() {
    // this.verificationOfFillingForm;
  },
  computed: {
    verificationOfFillingForm() {
      if (this.nameGood && this.urlGood && this.priceGood) {
        return false
      }
      return true
    },
    maskForPrice() {
      return this.priceGood.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
};
</script>

<style lang="scss" module>
.add-form {
  &__wrap {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
    padding: 24px;
    background: $bg;
    border-radius: 4px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
  }

  &__label {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &-required {
      position: relative;
      width: fit-content;

      &:after {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50px;
        background: $remark;
        position: absolute;
        top: 0px;
        right: -4px;
      }
    }
  }

  &__input {
    width: 100%;
    padding: 10px 16px;
    background: $bg;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: $light-text;
    }

    &-resize {
      height: 100px;
      resize: none;
    }
  }
}
</style>
