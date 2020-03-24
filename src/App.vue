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
  background: #dde1e7;
  height: 100%;
}
</style>
