<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item-content>

    <v-list-item-avatar>
      <v-img :src="item.openGraphImageUrl"></v-img>
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
};
</script>

<style></style>
