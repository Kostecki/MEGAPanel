<template>
  <div class="animations">
    <div v-if="animationsClone.length === 0" class="text-xs-center" style="padding-bottom: 24px">
      <h4>No Animations</h4>
    </div>
    <div v-else v-for="(animation, index) in animationsClone" :key="index" class="animation">
      <v-layout align-center row class="create-new">
        <v-flex xs11>
          <v-layout align-end justify-space-between row class="create-new pa-0">
            <v-flex xs4>
              <v-text-field
                v-model="animationsClone[index]['name']"
                label="Name"
                @change="updateAnimation(animation.key, index)"
              ></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field
                v-model="animationsClone[index]['value']"
                label="Value"
                @change="updateAnimation(animation.key, index)"
              ></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-checkbox
                v-model="animation.speedControl"
                label="Speed Control"
                color="primary"
                @change="updateAnimation(animation.key, index)"
              ></v-checkbox>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs1>
          <v-layout justify-end>
            <v-btn
              flat icon
              color="grey"
              @click="triggerDeleteConfirm(animation.key)"
              style="margin: 0"
            >
              <v-icon>remove_circle_outline</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
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
    margin-top: 24px;

    .v-input--selection-controls .v-input__slot {
      margin-bottom: 0;
    }
  }
</style>
