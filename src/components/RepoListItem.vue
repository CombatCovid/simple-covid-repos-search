<template>
  <v-list-item two-line class="tile" @click="onClick()">
    <v-list-item-content>
      <v-list-item-content>
        <v-list-item-title style="font-weight: bold; color: #767f94;">{{
          item.name
        }}</v-list-item-title>
        <v-list-item-subtitle class="grey--text">{{
          item.description
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item-content>

    <v-list-item-avatar
      style="
        background: #dde1e7;
        box-shadow: 22px 22px 44px #bcbfc4, -22px -22px 44px #feffff;
      "
    >
      <v-img :src="item.openGraphImageUrl" />
    </v-list-item-avatar>
  </v-list-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onClick() {
      window.open(this.item.url);
    },
  },
};
</script>

<style scoped lang="scss">
.tile {
  margin: 5px;
  border-radius: 4px;

  &:hover {
    border-radius: 25px;
    background: #dde1e7;
    box-shadow: inset 5px 5px 15px #ced1d7, inset -5px -5px 15px #ecf1f7;
    /* 
    background: #dde1e7;
    box-shadow: inset 5px 5px 14px #b3b6bb, inset -5px -5px 14px #ffffff; */
  }

  &:active {
  }
}
</style>
