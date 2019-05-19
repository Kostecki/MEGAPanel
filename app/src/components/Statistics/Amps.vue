<template>
  <div class="current-amps">
    <div class="caption font-weight-light font-italic text-uppercase">Current Consumption</div>
    <Loader v-if="showLoader" />
    <div v-else>
      <div class="single-value mt-1">
        <span class="font-weight-light">Live:</span> <span class="font-weight-bold">{{ amps.live }} Ampere</span>
      </div>
      <div class="single-value">
        <span class="font-weight-light">Min:</span> <span class="font-weight-bold">{{ amps.min }} Ampere</span>
      </div>
      <div class="single-value">
        <span class="font-weight-light">Max:</span> <span class="font-weight-bold">{{ amps.max }} Ampere</span>
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
  computed: {
    ...mapState({
      amps: state => state.statistics.amps
    }),
    showLoader () {
      return this.hasEmptyProperties(this.amps)
    }
  }
}
</script>

<style lang="scss" scoped>
  .current-amps {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .single-value {
    display: flex;
    justify-content: space-between;
  }
</style>
