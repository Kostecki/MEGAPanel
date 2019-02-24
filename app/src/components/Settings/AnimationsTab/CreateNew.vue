<template>
  <v-layout align-center row class="create-new">
    <v-flex xs11>
      <v-layout align-end justify-space-between row class="create-new pa-0">
        <v-flex xs4>
          <v-text-field
            v-model="newAnimation['name']"
            label="Name"
            @input="updateValue"
          ></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-text-field
            v-model="newAnimation['value']"
            label="Value"
          ></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-checkbox
            v-model="newAnimation['speedControl']"
            label="Speed Control"
            color="primary"
          ></v-checkbox>
        </v-flex>
      </v-layout>
    </v-flex>
      <v-flex xs1>
        <v-layout justify-end>
          <v-btn
            flat icon
            color="grey"
            @click="addNew"
            style="margin: 0"
          >
            <v-icon>add_circle_outline</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      newAnimation: {}
    }
  },
  methods: {
    addNew () {
      if (this.newAnimation.name && this.newAnimation.value) {
        this.$store.dispatch('addNewAnimation', this.newAnimation)
          .then(this.clear())
          .catch(error => console.log(error))
      }
    },
    updateValue () {
      this.newAnimation['value'] = this.newAnimation['name']
        .replace(/[^a-z0-9]/gi, '')
        .toLowerCase()
    },
    clear () {
      this.newAnimation = {}
    }
  }
}
</script>

<style lang="scss">
  .create-new {
    padding: 8px 15px;

    .v-input__control {
      .v-input__slot {
        margin-bottom: 0;
      }
    }
  }
</style>

<style lang="scss" scoped>
</style>
