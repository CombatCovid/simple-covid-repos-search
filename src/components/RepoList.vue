<template>
  <v-list
    nav
    dense
    style="
      border-radius: 20px;
      background: #dde1e7;
      box-shadow: 20px 20px 60px #bcbfc4, -20px -20px 60px #feffff;
      padding: 0;
    "
  >
    <RepoListItem v-for="(repo, index) in repos" :key="index" :item="repo" />
  </v-list>
</template>

<script>
import RepoListItem from '../components/RepoListItem';

export default {
  components: {
    RepoListItem,
  },
  props: {
    repos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
