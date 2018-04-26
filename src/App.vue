<template>
  <div id="app">
    <Header/>
    <div class="view">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      Header,
      Footer
    }
  });
</script>

<style lang="scss" scoped>
  @import './styles/variables';

  // For sticky footer
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .view {
    // Header margin
    margin-top: $header-height;
    // Sticky footer
    flex: 1;
  }

</style>
