<template>
  <v-container id="home">
    <p class="display-1 accent--text font-weight-bold mb-10 mt-2 text-center">
      #CombatCovid
    </p>

    <v-row align="center" justify="center">
      <v-col sm="12" md="8">
        <div v-if="$apollo.loading" class="text-center mt-12">
          <v-progress-circular class="text-center" color="info" indeterminate />
        </div>
        <v-card elevation="0" style="border-radius: 20px;">
          <RepoList
            v-if="organization"
            :repos="organization.repositories.nodes"
          />
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

<style lang="scss" scoped></style>
