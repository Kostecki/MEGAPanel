<template>
  <v-container>
    <v-row
      align="center"
      class="create-new">
      <v-col cols="12" class="py-0">
        <div class="subheading page-title">
          Create New
        </div>
        <v-row
          align="end"
          justify="space-between"
          class="create-new pa-0">
          <v-col
            cols="12"
            sm="5"
            class="py-0">
            <v-text-field
              v-model="newAnimation['name']"
              label="Name"
              class="name-input"
              @input="updateValue" />
          </v-col>
          <v-col
            cols="12"
            sm="5"
            class="pa-0">
            <v-text-field
              v-model="newAnimation['value']"
              label="Value"
              class="value-input" />
          </v-col>
          <v-col
            cols="6"
            sm="1"
            class="speed-control-container py-0">
            <span class="speed-control-label">Speed</span>
            <v-switch
              v-model="newAnimation['speedControl']"
              color="primary"
              class="speed-control-toggle" />
          </v-col>
          <v-col
            cols="6"
            sm="1"
            class="add-btn">
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
      newAnimation: {
        speedControl: false
      }
    }
  },
  methods: {
    addNew () {
      if (this.newAnimation.name && this.newAnimation.value) {
        this.$store.dispatch('lights/newAnimation', this.newAnimation)
          .then(this.clear())
          .catch(error => {
            this.$store.commit('shared/setMessage', {
              text: error,
              type: 'error'
            })
          })
      }
    },
    updateValue () {
      this.newAnimation['value'] = this.newAnimation['name']
        .replace(/[^a-z0-9]/gi, '')
        .toLowerCase()
    },
    clear () {
      this.newAnimation = {
        speedControl: false
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

  .add-btn {
    display: flex;
    justify-content: flex-end;

    button {
      margin-right: 0;
    }
  }
</style>
