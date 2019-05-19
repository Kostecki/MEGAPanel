<template>
  <v-alert
    :type="type"
    dismissible
    :value="true"
    class="alert"
    @input="onClose">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  props: ['text', 'type'],
  data () {
    return {
      timeout: 3000
    }
  },
  created () {
    setTimeout(() => this.onClose(), this.timeout)
  },
  methods: {
    onClose () {
      this.$emit('dismissed')
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert {
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 100;
    margin: 0;
  }
</style>
