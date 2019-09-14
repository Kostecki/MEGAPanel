<template>
  <v-container>
    <v-row
      align="center"
      class="create-new">
      <v-col
        cols="12"
        class="py-0 pr-0">
        <div class="subheading page-title">
          New Battery
        </div>
        <v-row
          align="center"
          class="create-new pa-0">
          <v-col
            cols="12"
            sm="5"
            class="py-0 pr-0">
            <v-text-field
              v-model="newBattery['batteryId']"
              label="Name"
              class="name-input" />
          </v-col>
          <v-col
            cols="6"
            sm="1"
            class="add-btn pa-0">
            <v-btn
              text
              icon
              color="grey"
              @click="addNew">
              <v-icon>add_circle_outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
