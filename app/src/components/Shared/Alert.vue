<template>
  <v-alert
    type="error"
    dismissible
    @input="onClose"
    :value="true"
    class="alert"
  >
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    onClose () {
      this.$emit('dismissed')
    }
  }
}
</script>

<style scoped>
  .alert {
    margin: 0;
  }
</style>
