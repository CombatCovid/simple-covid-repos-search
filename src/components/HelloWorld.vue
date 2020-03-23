<template>
  <v-container>
    <v-row class="text-center" v-for="(repo, index) in organization.repositories.nodes" :key="index">
      {{ repo.description }}
    </v-row>
  </v-container>
</template>

<script>
  import gql from 'graphql-tag';
  export default {
    name: 'HelloWorld',
    data: () => ({}),
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
