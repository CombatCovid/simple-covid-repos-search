const path = require('path');

// Load .env files
const { loadEnv } = require('vue-cli-plugin-apollo/utils/load-env');
const env = loadEnv([path.resolve(__dirname, '.env'), path.resolve(__dirname, '.env.local')]);

module.exports = {
  client: {
    service: env.VUE_APP_APOLLO_ENGINE_SERVICE,
    name: 'github',
    url: 'https://api.github.com/graphql',
    headers: {
      authorization: 'Bearer a588bf395b9533cd40d10583d3ff24389b029f30'
    },
    includes: ['src/**/*.{js,jsx,ts,tsx,vue,gql}']
  },
  service: {
    name: env.VUE_APP_APOLLO_ENGINE_SERVICE,
    localSchemaFile: path.resolve(__dirname, './node_modules/.temp/graphql/schema.json')
  },
  engine: {
    endpoint: process.env.APOLLO_ENGINE_API_ENDPOINT,
    apiKey: env.VUE_APP_APOLLO_ENGINE_KEY
  }
};
