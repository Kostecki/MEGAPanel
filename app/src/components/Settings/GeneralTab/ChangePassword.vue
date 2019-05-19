<template>
  <div>
    <div class="subheading page-title">
      Change Password
    </div>

    <v-divider class="my-3" />

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="change-pass-form">
      <v-text-field
        v-model="updatedPassword['passwordOne']"
        :rules="[rules.required]"
        label="Password"
        :append-icon="show.one ? 'visibility_off' : 'visibility'"
        :type="show.one ? 'text' : 'password'"
        required
        @click:append="show.one = !show.one" />
      <v-text-field
        v-model="updatedPassword['passwordTwo']"
        :rules="[rules.required, rules.match]"
        label="Confirm Password"
        :append-icon="show.two ? 'visibility_off' : 'visibility'"
        :type="show.two ? 'text' : 'password'"
        required
        @click:append="show.two = !show.two" />

      <v-btn
        color="primary"
        class="save-btn"
        :loading="loading"
        :disabled="loading"
        @click="submitForm">
        Save
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      valid: false,
      show: {
        one: false,
        two: false
      },
      rules: {
        required: value => !!value || 'Password is required.',
        match: value => value === this.updatedPassword.passwordOne || 'Password fields must match.'
      },
      updatedPassword: {}
    }
  },
  computed: {
    ...mapState('shared', ['loading'])
  },
  methods: {
    submitForm () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('user/changePassword', this.updatedPassword.passwordOne)
          .then(this.resetForm)
          .catch(error => this.$store.commit('shared/setError', error))
      }
    },
    resetForm () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
  @media (max-width: 599px) {
    .page-title {
      margin-top: 30px;
    }
  }

  .change-pass-form {
    .save-btn {
      float: right;
      margin: 15px 0 0 0;
    }
  }
</style>
