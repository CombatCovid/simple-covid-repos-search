<template>
  <v-list-item two-line @click="onClick()">
    <v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
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

<style></style>
