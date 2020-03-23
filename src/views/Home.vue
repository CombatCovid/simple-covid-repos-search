<template>
  <v-container id="home">
    <div>
      <v-alert icon="mdi-book-open-variant" prominent text type="info">
        List of all Repositories #CombatCovid19
      </v-alert>
    </div>

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
          repositories(first: 10) {
            nodes {
              name
              description
              openGraphImageUrl
            }
          }
        }
      }
    `,
  },
};
</script>

<style lang="scss" scoped></style>
