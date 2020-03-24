module.exports = {
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    // Apollo-related options
    apollo: {
      lintGQL: true,
      // Cross-Origin options
      cors: '*',
    },
  },
};
