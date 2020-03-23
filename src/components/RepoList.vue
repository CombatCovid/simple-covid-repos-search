<template>
  <v-list rounded>
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
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
