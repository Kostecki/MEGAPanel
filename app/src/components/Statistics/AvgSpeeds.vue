<template>
  <div class="avg-speeds">
    <div class="caption font-weight-light font-italic text-uppercase">
      Average Network Speed
    </div>
    <div class="speeds mt-1">
      <div
        v-for="(value, key, index) in avg"
        :key="index"
        class="single-speed">
        <span class="direction font-weight-light">{{ key | capitalize }}:</span> <span class="speed font-weight-bold">{{ value }} kbit/s</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avg: { // TODO: get this from the store
        upload: 120.13,
        download: 214.76
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .single-speed {
    display: flex;
    justify-content: space-between;
  }
</style>
