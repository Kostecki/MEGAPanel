<template>
  <v-layout row>
    <v-flex xs12>
      <v-card color="white">
        <v-layout
          class="container"
          row
          wrap>
          <v-flex
            xs12
            sm6
            class="user-info">
            <div class="headline">
              {{ user.email }}
            </div>
            <v-btn
              class="mt-3"
              color="primary"
              @click="$store.dispatch('user/logout')">
              Log Out
            </v-btn>
          </v-flex>

          <v-flex
            xs12
            sm6>
            <ChangePassword />
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
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
  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
