<template>
  <v-container id="home">
    <div>
      <v-alert icon="mdi-book-open-variant" prominent text type="info">
        List of all Repositories #CombatCovid19
      </v-alert>
    </div>

    <v-card v-if="organization" class="mx-auto" tile dark>
      <v-list rounded>
        <v-list-item-group dark>
          <v-list-item
            v-for="(repo, index) in organization.repositories.nodes"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-content>
                <v-list-item-title v-text="repo.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="repo.description"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item-content>

            <v-list-item-avatar>
              <v-img :src="repo.openGraphImageUrl"></v-img>
            </v-list-item-avatar>
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
