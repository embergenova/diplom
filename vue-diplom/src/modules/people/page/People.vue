<template>
  <div class="people">
    <div class="people-wrapper">
        <div class="people-wrapper-card" v-for="item of getPeople">
            <router-link  :to="{path: `/actor/${item.name}`, query:{id: item.id}}" >
                <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.profile_path}`" alt="">
                 <h3>{{item.name}}</h3>
            </router-link>
        </div>
    </div>
    <div class="people-paginate">
      <button @click="Prev" class="btn btn1">Prev</button>
      <p>{{ getPage }} из <span>{{ getTotalPeople }}</span></p>
      <button @click="Next" class="btn btn1">Next</button>
    </div>
  </div>
</template>

<script>
export default {
    created(){
          this.$store.dispatch('fetchPeople', this.getPage)
      },
    computed:{
          getPeople(){
              return this.$store.getters.getPeople
          },
          getPage(){
              return this.$store.getters.getPage
          },
          getTotalPeople (){
             return this.$store.getters.getTotalPeople
         }
        },
  methods:{
    Prev(){
      if(this.getPage>1){
        this.$store.commit('SET_DECR_PAGES')
        this.$store.dispatch('fetchPeople',this.getPage)
      }else{
        this.disabled
      }
    },
    Next(){
      if(this.getPage < this.getTotalPeople){
      this.$store.commit('SET_INCR_PAGES')
      this.$store.dispatch('fetchPeople',this.getPage)
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
@import '@assets/css/people.scss';
</style>