<template>
  <div class="actor">
    <div class="actor-details">
    <div class="actor-details-left">
        <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${getActor.profile_path}`"  alt="">
    </div>
    <div class="actor-details-right">
        <h1>{{getActor.name }}</h1>
        <h4>Birthday:<span class="type">{{getActor.birthday}}</span></h4>
        <h4>Place of Birth:<span class="type"> {{getActor.place_of_birth}}</span></h4>
        <h4>Also Known As:<span class="type" v-for="item in getActor.also_known_as">{{item}},</span></h4>
        <br>
        <span class="type">{{getActor.known_for_department}}</span>
        <span class="minutes">{{getActor.popularity}}*</span>
    </div>
  </div>
  <div class="actor-bio" v-if="getActor.biography.length!==0">
    <h3>Biography</h3>
    <p>{{getActor.biography}}</p>
  </div>

  <div class="actor-slider">
    <h1 v-if="getImages.length!==0">Images</h1>
    <carousel  v-if="getImages.length!==0" v-bind="settings" :breakpoints="breakpoints">
    <slide v-for="item in getImages" :key="item" class="actor-slider-item">
      <div class="image"> <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.file_path}`"  alt="image"></div>
    </slide>

    <template #addons>
      <Navigation />
    </template>
  </carousel>
</div>
  <div class="actor-slider">
    <h1 v-if="getFilm.length!==0">Films</h1>
    <carousel  v-if="getFilm.length!==0" v-bind="settings" :breakpoints="breakpoints">
    <slide v-for="item in getFilm" :key="item">
           <router-link :to="{path: `/details/${item.title}`, query:{id: item.id}}" class="actor-slider-item">
            <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`"  alt="Recomendation">
            <div class="actor-slider-item-title"><h3>{{item.title}}</h3> 
              <span class="actor-slider-item-vote">{{item.vote_average}}</span></div>
           </router-link>
    </slide>

    <template #addons>
      <Navigation />
    </template>
  </carousel>
</div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    breakpoints: {
      360: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      480: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      768: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
      1200: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
  computed:{
        getActor(){
            return this.$store.getters.getActor
        },
        getImages(){
            return this.$store.getters.getImages
        },
        getFilm(){
            return this.$store.getters.getFilm
        }
    },
    created(){
        this.$store.dispatch('fetchActor', this.$route.query.id),
        this.$store.dispatch('fetchImages', this.$route.query.id),
        this.$store.dispatch('fetchFilm', this.$route.query.id)
    }

}
</script>

<style lang="scss" scoped>
@import '@assets/css/actor.scss';
</style>