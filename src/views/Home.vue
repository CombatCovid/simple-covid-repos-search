<template>
  <v-container id="home">
    <v-alert icon="mdi-source-repository" prominent text type="info">
      List of all Repositories #CombatCovid19
    </v-alert>

    <v-card v-if="organization" class="mx-auto" dark>
      <RepoList :repos="organization.repositories.nodes" />
    </v-card>
  </v-container>
</template>

<script>
import gql from 'graphql-tag';
import RepoList from '../components/RepoList';

export default {
  name: 'Home',
  components: {
    RepoList,
  },
  data: () => ({}),
  mounted() {},
  apollo: {
    organization: gql`
      query {
        organization(login: "CombatCovid") {
          repositories(first: 10, orderBy: { field: NAME, direction: ASC }) {
            nodes {
              name
              description
              openGraphImageUrl
              url
            }
          }
        }
      }
    `,
  },
};
</script>

<style lang="scss" scoped></style>
