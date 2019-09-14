<template>
  <v-row>
    <v-col
      cols="12"
      class="py-0">
      <v-card
        color="white">
        <v-row
          class="container">
          <v-col
            cols="12"
            sm="6"
            class="user-info pa-0">
            <div class="headline">
              {{ user.email }}
            </div>
            <v-btn
              class="mt-3"
              color="primary"
              @click="$store.dispatch('user/logout')">
              Log Out
            </v-btn>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            class="pa-0">
            <ChangePassword />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import ChangePassword from './ChangePassword.vue'

export default {
  components: {
    ChangePassword
  },
  computed: {
    ...mapState('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 0;
  }

  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
