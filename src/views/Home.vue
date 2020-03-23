<template>
  <v-container id="home">
    <v-card class="mx-auto" tile v-if="organization" dark>
      <v-list rounded color="dark">
        <v-subheader>List of all Repositories #CombatCovid19</v-subheader>

        <v-list-item-group dark>
          <v-list-item
            v-for="(repo, index) in organization.repositories.nodes"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="repo.description"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'Home',
  data: () => ({}),
  mounted() {},
  apollo: {
    organization: gql`
      query {
        organization(login: "CombatCovid") {
          repositories(first: 10) {
            nodes {
              description
            }
          }
        }
      }
    `
  }
};
</script>

<style lang="scss" scoped></style>
