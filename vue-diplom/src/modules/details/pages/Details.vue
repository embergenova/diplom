<template>
<div class="details">
    <div class="details-films">
    <div class="details-films-left">
        <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${getDetails.poster_path}`"  alt="">
    </div>
    <div class="details-films-right">
        <h1>{{getDetails.title }}</h1>
        <h4>{{getDetails.release_date}} , <span v-for="item in getDetails.production_countries">{{item.name}},</span></h4>
        <span class="minutes">{{getDetails.runtime}}min</span>
        <span class="type" v-for="item in getDetails.genres">{{item.name}},</span>
        <br>
        <span class="type">{{getDetails.budget}}$</span>
        <span class="minutes">{{getDetails.vote_average}}*</span>
        <p class="text">{{getDetails.overview}}
          <span v-for="item in getDetails.production_companies">{{item.name}},</span>
        </p>
    </div>
  </div>

  <div class="details-slider">
    <h1 v-if="getActors.length!==0">Actors</h1>
    <carousel  v-if="getActors.length!==0" v-bind="settings" :breakpoints="breakpoints">
    <slide v-for="item in getActors" :key="item">
           <router-link :to="{path: `/actor/${item.name}`, query:{id: item.id}}" class="details-slider-item">
            <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.profile_path}`"  alt="actors">
            <div class="details-slider-item-title"><h3>{{item.name}}</h3> 
              <span class="details-slider-item-vote">{{item.popularity}}</span></div>
           </router-link>
    </slide>

    <template #addons>
      <Navigation />
    </template>
  </carousel>
</div>
  <div class="details-slider">
    <h1 v-if="getImage.length!==0">Images</h1>
    <carousel  v-if="getImage.length!==0" v-bind="settings" :breakpoints="breakpoints">
    <slide v-for="item in getImage" :key="item" class="details-slider-item" >
           <div class="image"><img  :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.file_path}`"  alt="image"></div> 
    </slide>

    <template #addons>
      <Navigation />
    </template>
  </carousel>
</div>
  <div class="details-slider">
    <h1 v-if="getRecomen.length!==0">Recomendation</h1>
    <carousel  v-if="getRecomen.length!==0" v-bind="settings" :breakpoints="breakpoints">
    <slide v-for="item in getRecomen" :key="item">
           <router-link :to="{path: `/details/${item.title}`, query:{id: item.id}}" class="details-slider-item">
            <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`"  alt="Recomendation">
            <div class="details-slider-item-title"><h3>{{item.title}}</h3> 
              <span class="details-slider-item-vote">{{item.vote_average}}</span></div>
           </router-link>
    </slide>

    <template #addons>
      <Navigation />
    </template>
  </carousel>
</div>
  <div class="details-slider">
    <h1 v-if="getSimila.length!==0">Simila</h1>
    <carousel  v-if="getSimila.length!==0" v-bind="settings" :breakpoints="breakpoints">
    <slide v-for="item in getSimila" :key="item">
           <router-link :to="{path: `/details/${item.title}`, query:{id: item.id}}" class="details-slider-item">
            <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`"  alt="simila">
            <div class="details-slider-item-title"><h3>{{item.title}}</h3> 
              <span class="details-slider-item-vote">{{item.vote_average}}</span></div>
          </router-link>
    </slide>

    <template #addons>
      <Navigation />
    </template>
  </carousel>

  </div>

  <div class="details-block">
    <h3 class="details-block-title" v-if="getReview.length!==0">Отзывы</h3>
    <div class="details-block-card" v-for="item in getReview" :key="item">
      <div class="details-block-top">
          <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.author_details.avatar_path}`"  alt="">
        <h3>{{ item.author }}</h3>
        <p>{{ item.created_at }}</p>
      </div>
      <p class="details-block-text">{{ item.content }}</p>
    </div>
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
        getDetails(){
            return this.$store.getters.getDetails
        },
        getActors(){
            return this.$store.getters.getActors
        },
        getImage(){
            return this.$store.getters.getImage
        },
        getRecomen(){
            return this.$store.getters.getRecomen
        },
        getSimila(){
            return this.$store.getters.getSimila
        },
        getReview(){
            return this.$store.getters.getReview
        },
    },
    created(){
        this.$store.dispatch('fetchActors', this.$route.query.id),
        this.$store.dispatch('fetchDetails', this.$route.query.id),
        this.$store.dispatch('fetchImage', this.$route.query.id),
        this.$store.dispatch('fetchRecomen', this.$route.query.id),
        this.$store.dispatch('fetchSimila', this.$route.query.id),
        this.$store.dispatch('fetchReview', this.$route.query.id)
    }
}
</script>
<style lang="scss" scoped>
@import '@assets/css/details.scss';
</style>