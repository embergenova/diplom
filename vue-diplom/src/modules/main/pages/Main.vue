<template> 
  <div class="main">
    <MainSearch></MainSearch>
    <div class="main-wrapper" >
      <router-link :to="{path: `/details/${item.title}`, query:{id: item.id}}" class="main-card" v-for="item of getFilms"  :key="item.id">
        <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`" alt="">
        <div class="main-card-title"><h3>{{item.title}}</h3> <span class="main-card-vote">{{item.vote_average}}</span></div>
        <div class="main-card-over">{{item.overview}}</div>
     </router-link>
    </div>
    <div class="main-paginate">
      <button @click="Prev" class="btn btn1">Prev</button>
      <p>{{ getPage }} of <span>{{ getTotalPage }}</span></p>
      <button @click="Next" class="btn btn1">Next</button>
    </div>
  </div>

</template> 
<script>
import MainSearch from '../components/MainSearch.vue';
export default {
  components:{
        MainSearch
       },
  created(){
      if (this.getFetchType === 'popular'){
          this.$store.dispatch('fetchMovies',this.getPage)
      }else{
          this.$store.dispatch('SearchFilm',this.getSearch)
      }
    },
  computed:{
        getFilms(){
            return this.$store.getters.getFilms
        },
        getPage(){
          return this.$store.getters.getPage
        },
        getTotalPage(){
            return this.$store.getters.getTotal
        },
        getFetchType(){
            return this.$store.getters.getFetchType
        },
        getSearch(){
            return this.$store.getters.getSearch
        },

  },
  methods:{
    Prev(){
      if(this.getPage>1){
        this.$store.commit('SET_DECR_PAGE')
          if (this.getFetchType === 'popular'){
              this.$store.dispatch('fetchMovies',this.getPage)
          }else{
              this.$store.dispatch('SearchFilm',this.getSearch)
          }

      }else{
        this.disabled
      }
    },
    Next(){
      if(this.getPage < this.getTotalPage){
      this.$store.commit('SET_INCR_PAGE')
          if (this.getFetchType === 'popular'){
              this.$store.dispatch('fetchMovies',this.getPage)
          }else{
              this.$store.dispatch('SearchFilm',this.getSearch)
          }
      }
      else{
        this.disabled
      }
    },
    // getPage() {
    //   this.$store.commit('SET_FILMS')
    //   this.$store.dispatch('fetchMovies',this.getPage)
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '@assets/css/main.scss';
</style>