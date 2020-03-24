<template>
  <v-list nav dense>
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
