<template>
  <v-app class="main-container">
    <Navigation />
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation/Navigation.vue'

export default {
  components: { Navigation }
}
</script>

<style lang="scss">
body {
  background: #ECEEEE;
}

.application--wrap {
  background: #ECEEEE;
}

.main-container {
  max-width: 780px;
  margin: 0 auto;
}

/* refresh styling */
.refresh {
  cursor: pointer;
  user-select: none;
}
 /* Animation for refresh button */
.refreshAnimation {
  display: inline-block;
  animation: spin 0.5s linear;
  
  @keyframes spin {
    0%  {-webkit-transform: rotate(0deg)}
    100% {-webkit-transform: rotate(360deg)}
  }
}
</style>
