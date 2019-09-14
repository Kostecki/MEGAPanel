<template>
  <v-container>
    <v-row
      row
      align-center
      justify-center>
      <v-col
        xs12
        sm8>
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>Sign In</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="formValid"
              lazy-validation
              @keyup.native.enter="onSignIn">
              <v-text-field
                ref="email"
                v-model="email"
                name="email"
                label="Email"
                type="email"
                :rules="emailRule"
                required
                prepend-icon="person" />
              <v-text-field
                ref="password"
                v-model="password"
                name="password"
                label="Password"
                type="password"
                :rules="passwordRule"
                required
                prepend-icon="lock" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="primary"
              @click="onSignIn">
              Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

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
  computed: {
    ...mapState({
      user: state => state.user.user,
      loading: state => state.shared.loading
    }),
    form () {
      return {
        email: this.email,
        password: this.password
      }
    }
  },
  watch: {
    user (newVal) {
      const nextUrl = this.$route.params.nextUrl
      if (newVal !== null && newVal !== undefined) {
        this.$router.push(nextUrl || '/')
      }
    }
  },
  methods: {
    onSignIn () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('user/signUserIn', { email: this.email, password: this.password })
      }
    }
  }
}
</script>

<style lang="scss">
</style>
