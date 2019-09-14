<template>
  <div class="animations">
    <v-container>
      <div
        v-if="!animations"
        class="text-xs-center">
        <v-progress-circular
          indeterminate
          color="primary"
          class="mb-4" />
      </div>
      <div v-else>
        <div class="subheading page-title mb-3">
          Animations
        </div>
        <div
          v-if="animations && animations.length === 0"
          class="text-xs-center"
          style="padding-bottom: 24px">
          <h4>No Animations</h4>
        </div>
        <div
          v-for="(animation, index) in animations"
          v-else
          :key="index"
          class="animation">
          <v-row
            align-center
            row>
            <v-col class="py-0">
              <v-row
                align="center"
                justify="space-between"
                class="pa-0">
                <v-col
                cols="12"
                sm="5"
                class="pr-0 py-0">
                  <v-text-field
                    v-model="animations[index]['name']"
                    label="Name"
                    class="name-input"
                    @change="updateAnimation(animation.key, index)" />
                </v-col>
                <v-col
                  cols="12"
                  sm="5"
                  class="pa-0">
                  <v-text-field
                    v-model="animations[index]['value']"
                    label="Value"
                    class="value-input"
                    @change="updateAnimation(animation.key, index)" />
                </v-col>
                <v-col
                  cols="6"
                  sm="1"
                  class="speed-control-container pa-0">
                  <span class="speed-control-label">Speed</span>
                  <v-switch
                    v-model="animation.speedControl"
                    color="primary"
                    class="speed-control-toggle"
                    @change="updateAnimation(animation.key, index)" />
                </v-col>
                <v-col
                  cols="6"
                  sm="1"
                  class="delete-btn">
                  <v-btn
                    text
                    icon
                    color="grey"
                    @click="deleteAnimation(animation.key)">
                    <v-icon>remove_circle_outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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
    ...mapState('lights', ['animations'])
  },
  methods: {
    updateAnimation (key, index) {
      this.$store.dispatch('lights/updateAnimation', {
        key: key,
        animation: this.animations[index]
      })
    },
    deleteAnimation (key) {
      Swal.fire({
        title: 'Delete animation?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('lights/deleteAnimation', key)
        }
      })
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
