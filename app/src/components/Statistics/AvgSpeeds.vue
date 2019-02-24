<template>
  <div class="avg-speeds">
    <div class="caption font-weight-light font-italic text-uppercase">Average Network Speed</div>
    <div class="speeds mt-1">
      <div v-for="(value, key, index) in avg" :key="index" class="single-speed">
        <span class="direction font-weight-light">{{key | capitalize}}:</span> <span class="speed font-weight-bold">{{value}} kbit/s</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avg: { // TODO: get this from the store
        download: 214.76,
        upload: 120.13
      }
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style>

</style>

<style lang="scss" scoped>
  .batteries {
    padding-right: 25px;
  }

  .single-speed {
    display: flex;
    justify-content: space-between;
  }
</style>
