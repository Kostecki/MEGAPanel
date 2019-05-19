<template>
  <div class="batteries">
    <div class="caption font-weight-light font-italic text-uppercase">Batteries</div>
    <Loader v-if="showLoader" />

    <div v-else class="batteries-list mt-1">
      <div v-for="(battery, index) in batteries" :key="index" class="single-battery">
        <span class="name font-weight-light">{{ battery.batteryId }}:</span> <span class="voltage font-weight-bold">{{ displayVoltage(battery.voltage) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { objectUtils } from '../../mixins/objectUtils'
import Loader from '../Shared/Loader.vue'

export default {
  mixins: [objectUtils],
  components: { Loader },
  methods: {
    displayVoltage (voltage) {
      let result = `${voltage}`

      if (typeof voltage === 'number') {
        result += ' Volt'
      }

      return result
    }
  },
  computed: {
    ...mapState({
      batteries: state => state.statistics.batteries
    }),
    showLoader () {
      return this.hasEmptyProperties(this.batteries)
    }
  }
}
</script>

<style lang="scss" scoped>
  .single-battery {
    display: flex;
    justify-content: space-between;
  }
</style>
