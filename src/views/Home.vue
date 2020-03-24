<template>
  <v-container id="home">
    <v-alert
      icon="mdi-source-repository"
      prominent
      text
      type="info"
      style="border-radius: 15px; font-weight: bold;"
    >
      List of #CombatCovid19 repositories
    </v-alert>

    <v-card
      v-if="organization"
      class="mx-auto"
      elevation="0"
      style="border-radius: 20px;"
    >
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
