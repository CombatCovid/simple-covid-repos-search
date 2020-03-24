<template>
  <v-app id="App" dark>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#App {
  background: rgb(20, 20, 20);
  background: linear-gradient(
    0deg,
    rgba(20, 20, 20, 1) 0%,
    rgba(31, 31, 31, 1) 100%
  );
  height: 100%;
}
</style>
