<template>
  <v-app class="main-container">
    <Navigation />
    <main>
      <AppMessage
        v-if="message"
        :text="message.text"
        :type="message.type"
        @dismissed="onDismissed" />
      <router-view />
    </main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation/Navigation.vue'

export default {
  components: { Navigation },
  computed: {
    message () {
      return this.$store.getters.message
    }
  },
  methods: {
    onDismissed () {
      this.$store.dispatch('shared/clearMessage')
    }
  }
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

  // Sweetalert2
  .swal2-container {
    font-family: Roboto;
  }
</style>
