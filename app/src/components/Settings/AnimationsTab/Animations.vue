<template>
  <div class="animations">
    <v-container>
      <div v-if="!animationsClone" class="text-xs-center">
        <v-progress-circular
          indeterminate
          color="primary"
          class="mb-4"
        ></v-progress-circular>
      </div>
      <div v-else>
        <div class="subheading page-title">Existing Animations</div>
        <div v-if="animationsClone && animationsClone.length === 0" class="text-xs-center" style="padding-bottom: 24px">
          <h4>No Animations</h4>
        </div>
        <div v-else v-for="(animation, index) in animationsClone" :key="index" class="animation">
          <v-layout align-center row>
            <v-flex>
              <v-layout align-end justify-space-between row wrap class="pa-0">
                <v-flex xs12 sm5>
                  <v-text-field
                    v-model="animationsClone[index]['name']"
                    label="Name"
                    class="name-input"
                    @change="updateAnimation(animation.key, index)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm5>
                  <v-text-field
                    v-model="animationsClone[index]['value']"
                    label="Value"
                    class="value-input"
                    @change="updateAnimation(animation.key, index)"></v-text-field>
                </v-flex>
                <v-flex xs6 sm1 class="speed-control-container">
                  <span class="speed-control-label">Speed</span>
                  <v-switch
                    v-model="animation.speedControl"
                    color="primary"
                    class="speed-control-toggle"
                    @change="updateAnimation(animation.key, index)"></v-switch>
                </v-flex>
                <v-flex xs6 sm1 class="delete-btn">
                  <v-btn
                    flat icon
                    color="grey"
                    @click="triggerDeleteConfirm(animation.key)">
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
          <v-card-title class="headline">Delete animation?</v-card-title>
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
export default {
  created () {
    this.animationsClone = JSON.parse(JSON.stringify(this.animations))
  },
  data () {
    return {
      animationsClone: null,
      dialog: false,
      selected: null
    }
  },
  methods: {
    updateAnimation (key, index) {
      this.$store.dispatch('updateAnimation', {
        key: key,
        animation: this.animationsClone[index]
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
    animations () {
      return this.$store.getters.animations
    }
  },
  watch: {
    animations (newVal, oldVal) {
      this.animationsClone = JSON.parse(JSON.stringify(newVal))
    }
  }
}
</script>

<style lang="scss">
  .animations {
    .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
      margin-bottom: 0;
    }
  }
</style>

<style lang="scss" scoped>
  .animation {
    @media (max-width: 599px) {
      margin-bottom: 24px;
    }

    .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
      margin-bottom: 0;
    }

    @media (min-width: 600px) {
      .name-input,
      .value-input {
        padding-right: 16px;
      }
    }

    .speed-control-container {
      position: relative;

      .v-input--selection-controls {
        margin-top: 28px;
      }

      .speed-control-label {
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

      .speed-control-toggle {
        .v-input__slot {
          margin-bottom: 0;
        }

        @media (min-width: 600px) {
          justify-content: flex-end;
        }
      }
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
