<template>
  <v-app class="main-container">
    <Navigation />
    <main>
      <AppMessage
        v-if="message"
        @dismissed="onDismissed"
        :text="message.text"
        :type="message.type"
      />
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation/Navigation.vue'

export default {
  components: { Navigation },
  methods: {
    onDismissed () {
      this.$store.dispatch('shared/clearMessage')
    }
  },
  computed: {
    message () {
      return this.$store.getters.message
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
