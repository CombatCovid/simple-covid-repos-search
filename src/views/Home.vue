<template>
  <v-container id="home">
    <v-text style="color: #111; font-size: 1.2rem;" class="font-weight-bold"
      >Welcome to #CombatCovid Repositories</v-text
    >

    <v-row align="center" justify="center">
      <v-col sm="12" md="10">
        <v-card
          v-if="organization"
          class="mx-auto"
          elevation="0"
          style="border-radius: 20px;"
        >
          <RepoList :repos="organization.repositories.nodes" />
        </v-card>
      </v-col>
    </v-row>
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
              updatedAt
            }
          }
        }
      }
    `,
  },
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
