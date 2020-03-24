<template>
  <v-list
    rounded
    dense
    style="
      border-radius: 20px;
      background: #dde1e7;
      box-shadow: 20px 20px 60px #bcbfc4, -20px -20px 60px #feffff;
      padding: 0;
    "
  >
    <v-list-item>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-icon class="info--text mr-2" v-on="on"
            >mdi-source-repository</v-icon
          >
        </template>
        <span>Github</span>
      </v-tooltip>

      <v-list-item-title class="font-weight-bold info--text"
        >Repositories</v-list-item-title
      >
      <v-list-item-action-text class="mr-5 info--text font-weight-bold">{{
        repos.length
      }}</v-list-item-action-text>
    </v-list-item>
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
