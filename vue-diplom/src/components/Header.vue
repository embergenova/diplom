<template>
  <div class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-content-logo">
          <router-link to="/"> <img src="../assets/img/logo.png" alt="logo"></router-link>
        </div>
        <div   class="header-content-nav" :class="{'active':hamburgerOpen}">
         <nav>
        <ul>
          <li class="closed"  :class="{'active':hamburgerOpen}" v-on:click="toggleNav">X</li>
          <li><router-link v-on:click="toggleNav" to="/"> Movies</router-link></li>
          <li><router-link v-on:click="toggleNav" to="/people">People</router-link></li>
          <li><router-link v-on:click="toggleNav" to="/auth">Account</router-link></li>
        </ul>
      </nav>
        </div>
        <div class="hamburger" v-if="!hamburgerOpen" v-on:click="hamburgerOpen = !hamburgerOpen" key="header-content-nav" >
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
         </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
         hamburgerOpen: false,
  }
},
methods: {
      toggleNav() {
        this.hamburgerOpen = !this.hamburgerOpen;
      },
    },



}
</script>
<style lang="scss" scoped>
@import '@assets/css/header.scss';
</style>