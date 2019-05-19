<template>
  <div class="current-battery">
    <div class="caption font-weight-light font-italic text-uppercase">
      Battery ({{ battery }})
    </div>
    <Loader v-if="!currentBatteryVoltage" />
    <div
      v-else
      class="title font-weight-bold mt-1 current-voltage"
      :class="setState">
      {{ displayVoltage }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../Shared/Loader.vue'

export default {
  components: { Loader },
  data () {
    return {
      battery: 'ThunderDucks' // TODO: get this from the store
    }
  },
  computed: {
    ...mapState('statistics', ['currentBatteryVoltage']),
    displayVoltage () {
      if (this.currentBatteryVoltage) {
        return `${this.currentBatteryVoltage} Volt (${this.chargeLevel}%)`
      } else {
        return '-'
      }
    },
    setState () {
      const voltage = this.currentBatteryVoltage

      if (!voltage) {
        return
      }

      if (voltage >= 12.10) {
        return 'good'
      } else if (voltage > 11.50) {
        return 'okay'
      } else {
        return 'bad'
      }
    },
    chargeLevel () {
      const voltage = this.currentBatteryVoltage

      if (voltage >= 12.73) {
        return 100
      } else if (voltage >= 12.62) {
        return 90
      } else if (voltage >= 12.50) {
        return 80
      } else if (voltage >= 12.37) {
        return 70
      } else if (voltage >= 12.24) {
        return 60
      } else if (voltage >= 12.10) {
        return 50
      } else if (voltage >= 11.96) {
        return 40
      } else if (voltage >= 11.81) {
        return 30
      } else if (voltage >= 11.66) {
        return 20
      } else if (voltage >= 11.51) {
        return 10
      } else {
        return 0
      }
    }
  },
  created () {
    this.$store.dispatch('statistics/currentBatteryVoltage')
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
      height: 100%;
    }

    .current-voltage {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .good { color: green; }
    .okay { color: #FFAB00; }
    .bad { color: red; }
  }
</style>
