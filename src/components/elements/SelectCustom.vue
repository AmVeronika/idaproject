<template>
  <div :class="[$style['settings-select'], 'fs-12']">
    <div :class="$style['settings-select__title']" @click="toggleMenu">
      {{ getSelected }}
      <svg
        :class="$style[toggleSelect ? 'arrow' : '']"
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264"
          stroke="#B4B4B4"
        />
      </svg>
    </div>
      <div v-if="toggleSelect" :class="$style['settings-select__wrapp']">
        <form :class="$style['settings-select__form']">
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
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SelectCustom",
  data() {
    return {
      toggleSelect: false,
    };
  },
  methods: {
    ...mapMutations(["changeSelected"]),
    toggleMenu() {
      this.toggleSelect = !this.toggleSelect;
    },
    selectItem(parametr) {
      this.changeSelected(parametr);
      this.toggleSelect = false;
    },
  },
  computed: {
    ...mapGetters(["getSearchParameters", "getGoodsList", "getSelected"]),
  },
};
</script>

<style lang="scss" module>
.arrow {
  transform: rotate3d(1, 0, 0, 180deg);
}
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: max-content;
    padding: 11px 16px;
    height: 36px;
    color: $light-text;
    background: $bg;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease-out;
    svg {
      transition: 0.4s ease-out;
    }
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
