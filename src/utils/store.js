import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      loggedIn: false,
    };
  },
});

export default store;
