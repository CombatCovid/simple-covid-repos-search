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
  /* background: rgb(38, 41, 44);
  background: linear-gradient(
    183deg,
    rgba(38, 41, 44, 1) 0%,
    rgba(29, 31, 35, 1) 50%,
    rgba(23, 23, 26, 1) 100%
  ); */
  background: #dde1e7;
  /* background: rgb(20, 20, 20);
  background: linear-gradient(
    0deg,
    rgba(20, 20, 20, 1) 0%,
    rgba(31, 31, 31, 1) 100%
  ); */
  height: 100%;
}
</style>
