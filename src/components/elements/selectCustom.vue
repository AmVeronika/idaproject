<template>
  <div :class="[$style['settings-select'], 'fs-12']">
    <div :class="$style['settings-select__title']" @click="toggleMenu">{{ selected }}</div>
    <div v-if="toggleSelect" :class="$style['settings-select__wrapp']">
      <form :class="[$style['settings-select__form'], ['castom__scroll']]">
        <label
          :class="[$style['settings-select__option'], 'fs-12']"
          v-for="parametr in getSearchParameters"
          :key="parametr"
          @change="selectItem(parametr)"
        >
          <input :class="$style['settings-select__input']" type="radio" />
          {{ parametr }}
        </label>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "selectCustom",
  data() {
    return {
      toggleSelect: false,
      selected: "По умолчанию"
    };
  },
  methods: {
    toggleMenu() {
      this.toggleSelect = !this.toggleSelect;
    },
    selectItem(parametr) {
      if (this.selected != parametr) {
        this.selected = parametr;
      }
      this.toggleSelect = false;
    }
  },
  computed: {
    ...mapGetters(["getSearchParameters"])
  }
};
</script>

<style lang="scss" module>
.settings-select {
  min-width: 122px;
  max-width: max-content;
  position: relative;
  z-index: 10;

  &__wrapp {
    position: absolute;
    top: 48px;
    right: 50%;
    transform: translateX(50%);
  }

  &__title {
    min-width: max-content;
    padding: 11px 16px;
    height: 36px;
    color: $light-text;
    background: $bg;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover {
      color: $remark;
      transition: 0.2s ease-out;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin-top: -10px;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    border-radius: 4px;
    background: $bg;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  &__option {
    width: max-content;
    padding: 10px 16px;
    cursor: pointer;
    color: $light-text;
    transition: 0.2s ease-out;
    &:hover {
      color: $remark;
      transition: 0.2s ease-out;
    }
  }

  &__input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}
</style>