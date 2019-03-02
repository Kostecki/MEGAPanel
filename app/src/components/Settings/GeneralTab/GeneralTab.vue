<template>
  <div>
    <v-divider />
    <div class="container">
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-layout align-center justify-center column fill-height>
            <div class="headline">{{ user.email }}</div>
            <v-btn
              class="mt-3"
              color="primary"
              @click="$store.dispatch('logout')"
            >Log Out</v-btn>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6>
          <ChangePassword />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import ChangePassword from './ChangePassword.vue'

export default {
  components: {
    ChangePassword
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
  .container {
    padding: 15px;
  }
</style>
