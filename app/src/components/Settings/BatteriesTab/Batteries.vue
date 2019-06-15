<template>
  <div class="batteries">
    <v-container>
      <div
        v-if="!batteries"
        class="text-xs-center">
        <v-progress-circular
          indeterminate
          color="primary"
          class="mb-4" />
      </div>
      <div v-else>
        <div class="subheading page-title mb-3">
          Batteries
        </div>
        <div
          v-if="batteries && batteries.length === 0"
          class="text-xs-center"
          style="padding-bottom: 24px">
          <h4>No Batteries</h4>
        </div>
        <div
          v-for="(battery, index) in batteries"
          v-else
          :key="index"
          class="battery">
          <v-layout
            align-center
            row>
            <v-flex>
              <v-layout
                align-end
                justify-space-between
                row
                wrap
                class="pa-0 battery-layout">
                <v-flex
                  xs12
                  sm5>
                  <v-text-field
                    v-model="batteries[index]['batteryId']"
                    label="Battery ID"
                    class="batteryId-input"
                    @change="updateBattery(battery.key, index)" />
                </v-flex>
                <v-flex
                  xs12
                  sm5>
                  <v-text-field
                    v-model="batteries[index]['voltage']"
                    label="Voltage"
                    class="voltage-input"
                    :class="noVoltage(batteries[index]['voltage'])"
                    readonly
                    @change="updateBattery(battery.key, index)" />
                </v-flex>
                <v-flex
                  xs6
                  sm1
                  class="current-battery-container">
                  <span class="custom-label">Active</span>
                  <v-icon
                    class="icon"
                    :class="batteries[index]['currentBattery'] ? 'active' : null">
                    check
                  </v-icon>
                </v-flex>
                <v-flex
                  xs6
                  sm1
                  class="remove-container delete-btn">
                  <span class="custom-label">Remove</span>
                  <v-btn
                    flat
                    icon
                    color="grey"
                    @click="deleteBattery(battery.key)">
                    <v-icon class="icon">
                      remove_circle_outline
                    </v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapState('settings', ['batteries'])
  },
  methods: {
    updateBattery (key, index) {
      this.$store.dispatch('settings/updateBattery', {
        key: key,
        battery: this.batteries[index]
      })
    },
    deleteBattery (key) {
      Swal.fire({
        title: 'Delete battery?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('settings/deleteBattery', key)
        }
      })
    },
    noVoltage (input) {
      if (typeof input === 'string' || input instanceof String) {
        return 'no-voltage'
      }
    }
  }
}
</script>

<style lang="scss">
  .batteries {
    .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
      margin-bottom: 0;
    }

    .v-input--selection-controls__input {
      margin: 0;
    }

    .battery input::placeholder {
      font-style: italic;
    }
  }

  .no-voltage input {
    color: gray !important;
    font-style: italic;
  }
</style>

<style lang="scss" scoped>
  .battery {
    @media (max-width: 599px) {
      margin-bottom: 24px;
    }

    .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
      margin-bottom: 0;
    }

    @media (min-width: 600px) {
      .batteryId-input,
      .voltage-input {
        padding-right: 16px;
      }
    }

    .battery-layout {
      display: flex;
      align-items: flex-start;
    }

    .current-battery-container {
      .icon {
        opacity: 0.2;
      }
    }

    .current-battery-container,
    .remove-container {
      text-align: center;
      user-select: none;

      span, .icon {
        display: block;
      }

      .v-input--selection-controls {
        margin-top: 28px;
        display: flex;
        justify-content: center;
      }

      .custom-label {
        color: rgba(0,0,0,.54);
        font-size: 12px;

        @media (min-width: 600px) {
          // left: 12px;
        }
      }

      .active {
        opacity: 1;
      }

      button {
        margin: -6px 0 0 0;
      }
    }
  }
</style>
