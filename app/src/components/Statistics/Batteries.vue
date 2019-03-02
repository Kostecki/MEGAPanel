<template>
  <div class="batteries">
    <div class="caption font-weight-light font-italic text-uppercase">Batteries (Last Seen)</div>
    <div class="batteries-list mt-1">
      <div v-for="(battery, index) in batteries" :key="index" class="single-battery">
        <span class="name font-weight-light">{{ battery.BatteryId }}:</span> <span class="voltage font-weight-bold">{{ battery.Voltage }} Volt</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      batteries: [ // TODO: get this from the store
        {
          BatteryId: 'ThunderDucks',
          Voltage: 12.8,
          CurrentBattery: true
        },
        {
          BatteryId: 'LightningGoose',
          Voltage: 11.7,
          CurrentBattery: false
        }
      ]
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
