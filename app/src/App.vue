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
}
 /* Animation for refresh button */
.refreshAnimation {
  -webkit-transition-duration: 0.8s;
  -moz-transition-duration: 0.8s;
  -o-transition-duration: 0.8s;
  transition-duration: 0.8s;

  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;

  transform: rotate(360deg);
}
</style>
