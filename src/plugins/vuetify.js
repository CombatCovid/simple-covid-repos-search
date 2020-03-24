import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#040404',
        secondary: '#0c0c0c',
        accent: '#767f94',
      },
    },
  },
});
