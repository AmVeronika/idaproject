<template>
  <div :class="$style.catalog">
    <selectCustom></selectCustom>
    <GoodsCard></GoodsCard>
  </div>

</template>

<script>
import { mapActions } from "vuex";
import GoodsCard from "./GoodsCard";
import selectCustom from "./elements/selectCustom";

export default {
  name: "Catalog",
  components: {
    GoodsCard,
    selectCustom
  },
  methods: {
    ...mapActions(["fetchDataGoodsList"]),
  },
  mounted() {
    this.fetchDataGoodsList();
  },
};
</script>

<style lang="scss" module>
.catalog {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}
</style>
