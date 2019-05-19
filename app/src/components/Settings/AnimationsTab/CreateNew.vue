<template>
  <v-container>
    <v-layout align-center row class="create-new">
      <v-flex xs12>
        <div class="subheading page-title">Create New</div>
        <v-layout align-end justify-space-between row wrap class="create-new pa-0">
          <v-flex xs12 sm5>
            <v-text-field
              v-model="newAnimation['name']"
              label="Name"
              class="name-input"
              @input="updateValue"></v-text-field>
          </v-flex>
          <v-flex xs12 sm5>
            <v-text-field
              v-model="newAnimation['value']"
              label="Value"
              class="value-input"></v-text-field>
          </v-flex>
          <v-flex xs6 sm1 class="speed-control-container">
            <span class="speed-control-label">Speed</span>
            <v-switch
              v-model="newAnimation['speedControl']"
              color="primary"
              class="speed-control-toggle"></v-switch>
          </v-flex>
          <v-flex xs6 sm1 class="add-btn">
            <v-btn
              flat icon
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
