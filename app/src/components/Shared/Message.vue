<template>
  <v-alert
    :type="type"
    dismissible
    @input="onClose"
    :value="true"
    class="alert">
      {{ text }}
  </v-alert>
</template>

<script>
export default {
  props: ['text', 'type'],
  created () {
    setTimeout(() => {
      this.onClose()
    }, this.timeout)
  },
  data () {
    return {
      timeout: 3000
    }
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
