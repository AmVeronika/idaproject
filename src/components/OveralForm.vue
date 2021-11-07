<template>
  <form
    :class="$style['add-form__wrap']"
    @submit="addGoodInList">
    <label
      :class="$style['add-form__label']">
      <span
        :class="['fs-10', $style['add-form__label-required']]"
      >Наименование товара</span
      >
      <input
        :class="[
          'fs-12',
          $style['add-form__input'],
          $style[!nameGood.remark ? '' : 'inputrequared'],
        ]"
        type="text"
        placeholder="Введите наименование товара"
        v-model="nameGood.value"
        @blur="remarkInfo(nameGood)"
      />
      <span
        v-if="nameGood.remark"
        :class="['fs-10', $style['add-form__label-remark']]"
      >
        Поле является обязательным
      </span>
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
        v-model="descriptionGood.value"
      />
    </label>
    <label
      :class="$style['add-form__label']">
      <span
        :class="['fs-10', $style['add-form__label-required']]"
      >Ссылка на изображение товара</span
      >
      <input
        :class="[
          'fs-12',
          $style['add-form__input'],
          $style[!urlGood.remark ? '' : 'inputrequared'],
        ]"
        type="url"
        placeholder="Введите ссылку"
        v-model="urlGood.value"
        @blur="remarkInfo(urlGood)"
      />
      <span
        v-if="urlGood.remark"
        :class="['fs-10', $style['add-form__label-remark']]"
      >
        Поле является обязательным
      </span>
    </label>
    <label
      :class="$style['add-form__label']">
      <span
        :class="['fs-10', $style['add-form__label-required']]"
      >Цена товара</span
      >
      <input
        :class="[
          'fs-12',
          $style['add-form__input'],
          $style[!priceGood.remark ? '' : 'inputrequared'],
        ]"
        type="number"
        placeholder="Введите цену"
        v-model="priceGood.value"
        @blur="remarkInfo(priceGood)"
      />
      <span
        v-if="priceGood.remark"
        :class="['fs-10', $style['add-form__label-remark']]"
      >
        Поле является обязательным
      </span>
    </label>
    <form-button
      :disabledClass="verificationOfFillingForm"
      @click="validationCheck"
    >Добавить товар
    </form-button>
    <ModalWindow
      :showModal="showModal"
    >
      <img src="../assets/img/success.gif" alt="загрузка" />
    </ModalWindow>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "OveralForm",
  components: {},
  data() {
    return {
      nameGood: {
        value: "",
        remark: false
      },
      descriptionGood: {
        value: "",
        remark: false
      },
      urlGood: {
        value: "",
        remark: false
      },
      priceGood: {
        value: "",
        remark: false
      },
      showModal: false
    };
  },
  methods: {
    ...mapMutations(["addGood"]),
    addGoodInList(e) {
      e.preventDefault();
      if (
        // выполнить добавление, только когда обязательные поля будут заполнены
        this.nameGood.value &&
        this.urlGood.value &&
        this.priceGood.value
      ) {
        const goodObject = {
          id: uuidv4(),
          name: this.nameGood.value,
          description: this.descriptionGood.value,
          price: this.priceGood.value,
          urlImg: this.urlGood.value
        };
        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 1000);
        setTimeout(() => {
          this.addGood(goodObject);
        }, 500);
        this.nameGood.value = "";
        this.descriptionGood.value = "";
        this.priceGood.value = "";
        this.urlGood.value = "";
      }
    },
    remarkInfo(value) {
      if (value.value) {
        return (value.remark = false);
      }
    },
    validationCheck() {
      if (this.verificationOfFillingForm) {
        if (!this.nameGood.value) {
          /* eslint-disable */
          this.nameGood.remark = true;
        }
        if (!this.urlGood.value) {
          this.urlGood.remark = true;
        }
        if (!this.priceGood.value) {
          this.priceGood.remark = true;
        }
      }
    }
  },
  computed: {
    ...mapGetters(["getGoodsList"]),
    verificationOfFillingForm() {
      return !(this.nameGood.value && this.urlGood.value && this.priceGood.value);
    }
  }
};
</script>

<style lang="scss" module>
.inputrequared {
  outline: 1px solid $remark;
}

.add-form {
  &__wrap {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
    padding: 24px;
    background: $bg;
    border-radius: 4px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04),
    0 6px 10px rgba(0, 0, 0, 0.02);
    position: relative;
  }

  &__label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;

    &-remark {
      color: $remark;
      position: absolute;
      bottom: -13px;
    }

    &-required {
      position: relative;
      width: fit-content;
      display: block;

      &:after {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        background: $remark;
        border-radius: 50%;
        top: 0;
        right: -5px;
      }
    }
  }

  &__input {
    width: 100%;
    padding: 10px 16px;
    background: $bg;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

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
