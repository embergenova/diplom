<template>
    <div class="main-search">
        <h1>Welcome.</h1>
        <p>Millions of movies, series and people. Explore now.</p>
        <input type="text" @change="searchFilms" v-model="search" placeholder="Find a movie, series, person....">
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: this.$store.getters.getSearch
        }
    },
    methods: {
        searchFilms() {
            if (this.search.length > 0) {
                this.$store.commit('SET_PAGE', 1)
                this.$store.commit('SET_SEARCH', this.search)
                console.log(this.search);
                this.$store.dispatch('SearchFilm', this.search);
            }else {
                this.$store.commit('SET_PAGE', 1)
                this.$store.dispatch('fetchMovies',1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@assets/css/main.scss';
</style>