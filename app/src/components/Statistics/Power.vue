<template>
  <div class="current-amps">
    <div class="caption font-weight-light font-italic text-uppercase">Power Consumption</div>
    <Loader v-if="showLoader" />
    <div v-else class="content mt-1">
      <div class="single-value">
        <span class="font-weight-light">Current:</span> <span class="font-weight-bold">{{ amps.live.toFixed(2) }} Amps</span>
      </div>
      <div class="single-value">
        <span class="font-weight-light">Power:</span> <span class="font-weight-bold">{{ calculateWatts }} Watts</span>
      </div>

      <hr class="my-1">

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div class="single-value max" v-on="on">
            <span class="font-weight-light mr-2">Max:</span> <span class="font-weight-bold">{{ ampsMax }} Amps</span>
          </div>
        </template>
        <span>{{ amps.maxDate | epochToHuman }}</span>
      </v-tooltip>
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
  computed: {
    ...mapState('statistics', ['amps', 'currentBatteryVoltage']),
    showLoader () {
      return this.hasEmptyProperties(this.amps)
    },
    calculateWatts () {
      return (this.currentBatteryVoltage * this.amps.live).toFixed(2)
    },
    ampsLive () {
      if (!this.amps.live) {
        return
      }

      return this.amps.live.toFixed(2)
    },
    ampsMax () {
      // Wait for calculated amps.max before trying toFixed
      if (!this.amps.max) {
        return
      }
      return this.amps.max.toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
  .current-amps {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .single-value {
    display: flex;
    justify-content: space-between;
  }

  hr {
    background-color: rgba(128, 128, 128, 0.2);
    height: 1px;
    border: 0;
  }
</style>
