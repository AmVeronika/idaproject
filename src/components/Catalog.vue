<template>
  <div :class="$style.catalog">
    <SelectCustom></SelectCustom>
    <GoodsCard></GoodsCard>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import GoodsCard from "./GoodsCard";
import SelectCustom from "./elements/SelectCustom";

export default {
  name: "Catalog",
  components: {
    GoodsCard,
    SelectCustom
  },
  methods: {
    ...mapActions(["fetchDataGoodsList"])

  },
  mounted() {
    this.fetchDataGoodsList();
  }
};
</script>

<style lang="scss" module>
.catalog {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 16px;
}
</style>
