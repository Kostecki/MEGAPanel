<template>
  <v-container>
    <v-layout
      align-center
      row
      class="create-new">
      <v-flex xs12>
        <div class="subheading page-title">
          New Battery
        </div>
        <v-layout
          align-end
          row
          wrap
          class="create-new pa-0">
          <v-flex
            xs12
            sm5>
            <v-text-field
              v-model="newBattery['batteryId']"
              label="Name"
              class="name-input" />
          </v-flex>
          <v-flex
            xs6
            sm1
            class="add-btn">
            <v-btn
              flat
              icon
              color="grey"
              @click="addNew">
              <v-icon>add_circle_outline</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      newBattery: {
        voltage: 'No voltage registered', // Firebase doesn't like updating null fields
        currentBattery: false
      }
    }
  },
  methods: {
    addNew () {
      if (this.newBattery) {
        this.$store.dispatch('settings/addNewBattery', this.newBattery)
          .then(this.clear())
          .catch(error => {
            this.$store.commit('shared/setMessage', {
              text: error,
              type: 'error'
            })
          })
      }
    },
    clear () {
      this.newBattery = {
        voltage: 'No voltage registered',
        currentBattery: false
      }
    }
  }
}
</script>

<style lang="scss">
  .create-new {
    .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
      margin-bottom: 0;
    }
  }
</style>

<style lang="scss" scoped>
  @media (min-width: 600px) {
    .name-input {
      padding-right: 16px;
    }
  }

  .add-btn button {
    margin-left: 0;
  }
</style>
