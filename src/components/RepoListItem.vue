<template>
  <v-list-item two-line class="tile" @click="onClick()">
    <v-list-item-content>
      <v-list-item-content>
        <v-list-item-title style="font-weight: bold; color: #9fabc7;">{{
          item.name
        }}</v-list-item-title>
        <v-list-item-subtitle class="grey--text">{{
          item.description
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item-content>

    <v-list-item-avatar>
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
    border-radius: 20px;
    background: #dde1e7;
    box-shadow: inset 10px 10px 20px #c5c8ce, inset -10px -10px 20px #f5faff;
  }

  &:active {
  }
}
</style>
