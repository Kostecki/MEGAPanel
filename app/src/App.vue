<template>
  <v-app>
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
</style>
