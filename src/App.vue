<template>
  <v-app dark id="App">
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  })
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
