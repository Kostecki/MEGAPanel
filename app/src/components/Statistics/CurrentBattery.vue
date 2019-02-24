<template>
  <div class="current-battery">
    <div class="caption font-weight-light font-italic text-uppercase">Battery ({{battery}})</div>
    <div class="title font-weight-bold mt-1 current-voltage" :class="setState">{{voltage}} Volt ({{chargeLevel}}%)</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      voltage: 12.71, // TODO: get this from the store
      battery: 'ThunderDucks' // TODO: get this from the store
    }
  },
  computed: {
    // eslint-disable-next-line
    setState () {
      const voltage = this.voltage

      if (voltage >= 12.10) { return 'good' }
      if (voltage > 11.50) { return 'okay' }
      if (voltage <= 11.50) { return 'bad' }
    },
    // eslint-disable-next-line
    chargeLevel () {
      const voltage = this.voltage

      if (voltage >= 12.73) { return '100' }
      if (voltage >= 12.62) { return '90' }
      if (voltage >= 12.50) { return '80' }
      if (voltage >= 12.37) { return '70' }
      if (voltage >= 12.24) { return '60' }
      if (voltage >= 12.10) { return '50' }
      if (voltage >= 11.96) { return '40' }
      if (voltage >= 11.81) { return '30' }
      if (voltage >= 11.66) { return '20' }
      if (voltage >= 11.51) { return '10' }
      if (voltage < 11.51) { return '0' }
    }
  }
}
</script>

<style lang="scss" scoped>
  .current-battery {
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 600px) { // Larger than XS breakpoint
      display: flex;
      align-items: center;
      height: 100%;
    }

    .good { color: green; }
    .okay { color: #FFAB00; }
    .bad { color: red; }
  }
</style>
