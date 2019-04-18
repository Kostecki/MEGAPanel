<template>
  <div class="batteries">
    <v-container>
      <div v-if="!batteries" class="text-xs-center">
        <v-progress-circular
          indeterminate
          color="primary"
          class="mb-4"
        ></v-progress-circular>
      </div>
      <div v-else>
        <div class="subheading page-title mb-3">Existing Batteries</div>
        <div v-if="batteries && batteries.length === 0" class="text-xs-center" style="padding-bottom: 24px">
          <h4>No Batteries</h4>
        </div>
        <div v-else v-for="(battery, index) in batteries" :key="index" class="battery">
          <v-layout align-center row>
            <v-flex>
              <v-layout align-end justify-space-between row wrap class="pa-0">
                <v-flex xs12 sm5>
                  <v-text-field
                    v-model="batteries[index]['batteryId']"
                    label="Battery ID"
                    class="batteryId-input"
                    @change="updateAnimation(battery.key, index)" />
                </v-flex>
                <v-flex xs12 sm5>
                  <v-text-field
                    v-model="batteries[index]['voltage']"
                    label="Voltage"
                    class="voltage-input"
                    placeholder="No voltage registered"
                    @change="updateAnimation(battery.key, index)"
                    readonly />
                </v-flex>
                <v-flex xs6 sm1 class="current-battery-container">
                  <span class="current-battery-label">Active</span>
                  <v-checkbox
                    v-model="batteries[index]['currentBattery']"
                    color="primary"
                    readonly />
                </v-flex>
                <v-flex xs6 sm1 class="delete-btn">
                  <v-btn
                    flat icon
                    color="grey"
                    @click="triggerDeleteConfirm(battery.key)">
                    <v-icon>remove_circle_outline</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </div>
      </div>

      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Delete battery?</v-card-title>
          <v-card-actions>
            <v-btn block @click="closeDialog">Cancel</v-btn>
            <v-btn block color="error" @click="deleteAnimation">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      dialog: false,
      selected: null
    }
  },
  methods: {
    updateAnimation (key, index) {
      this.$store.dispatch('updateAnimation', {
        key: key,
        animation: this.batteries[index]
      })
    },
    triggerDeleteConfirm (key) {
      this.selected = key
      this.dialog = true
    },
    closeDialog () {
      this.selected = null
      this.dialog = false
    },
    deleteAnimation () {
      this.$store.dispatch('deleteAnimation', this.selected)
      this.closeDialog()
    }
  },
  computed: {
    ...mapState({
      batteries: state => state.settings.batteries
    })
    
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

    .current-battery-container {
      position: relative;

      .v-input--selection-controls {
        margin-top: 28px;
        display: flex;
        justify-content: center;
      }

      .current-battery-label {
        color: rgba(0,0,0,.54);
        font-size: 12px;
        position: absolute;
        right: auto;
        height: 120px;
        line-height: 20px;

        @media (min-width: 600px) {
          left: 12px;
        }
      }

      @media (min-width: 600px) {}
    }

    .delete-btn {
      display: flex;
      justify-content: flex-end;

      button {
        margin-right: 0;
      }
    }
  }
</style>