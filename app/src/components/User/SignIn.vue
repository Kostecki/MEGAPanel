<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm8>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign In</v-toolbar-title>
          </v-toolbar>
          <AppAlert
            v-if="error"
            @dismissed="onDismissed"
            :text="error.message"
          />
          <v-card-text>
            <v-form
              ref="form"
              v-model="formValid"
              lazy-validation
              @keyup.native.enter="onSignIn"
            >
              <v-text-field
                v-model="email"
                ref="email"
                name="email"
                label="Email"
                type="email"
                :rules="emailRule"
                required
                prepend-icon="person"
              ></v-text-field>
              <v-text-field
                v-model="password"
                ref="password"
                name="password"
                label="Password"
                type="password"
                :rules="passwordRule"
                required
                prepend-icon="lock"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="loading"
              @click="onSignIn"
              color="primary"
            >
              Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      emailRule: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRule: [v => !!v || 'Password is required'],
      errorMessages: '',
      formValid: true
    }
  },
  methods: {
    onSignIn () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
      }
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  },
  computed: {
    form () {
      return {
        email: this.email,
        password: this.password
      }
    },
    user () {
      return this.$store.getters.user
    },
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    user (newVal) {
      if (newVal !== null && newVal !== undefined) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss">
</style>
