import Vue from 'vue/dist/vue.esm'
import axios from 'axios'

new Vue({
  el: ".genre_vue",
  data: {
    genreInfo: {},
    artists: [],
    showModal: false,
  },
  methods: {
    setGenreInfo(id){
      axios.get(`api/genres/${id}.json`)
      .then(res => {
        this.genreInfo = res.data;
        this.artists = res.data.array;
        this.showModal = true
      });
    },
    setArtistInfo(id){
     window.location.href = `artists/${id}`;
    }
  }
});