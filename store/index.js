export const state = () => ({
  cacheVersion: "",
  instagramData: [],
  instagramFetched: false
});

export const mutations = {
  setCacheVersion(state, version) {
    state.cacheVersion = version;
  },
  setInstagramData(state, instagramData) {
    state.instagramData = instagramData;
  },
  setInstagramFetched(state, fetched) {
    state.instagramFetched = fetched;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("loadInstagramData");
  },
  loadCacheVersion({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then(res => {
      commit("setCacheVersion", res.data.space.version);
    });
  },
  async loadInstagramData({ commit }) {
    // await fetch(`${process.env.instagramProxyBaseUrl}.netlify/functions/feed`, {
    //   headers: {
    //     Accept: "application/json",
    //     "x-api-key": process.env.instagramProxyApiKey,
    //     "x-gist-id": process.env.gistId
    //   }
    // })
    //   .then(response => response.json())
    //   .then(instagramData => {
    //     commit("setInstagramData", instagramData.slice(0, 8));
    //     commit("setInstagramFetched", true);
    //   })
    //   .catch(reason => {
    //     console.log(reason);
        commit("setInstagramData", []);
        commit("setInstagramFetched", true);
      // });
  }
};
