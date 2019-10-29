<template>
  <v-container class="settings-container">
    <v-row>
      <v-col
        cols="12">
        <v-card>
          <v-tabs
            v-model="active"
            fixed-tabs
            slider-color="primary">
            <v-tab
              v-for="(tab, index) in tabs"
              :key="index"
              @click="setActiveTab(tab.name, index)">
              {{ tab.name }}
            </v-tab>
            <v-tab-item
              v-for="(tab, index) in tabs"
              :key="index"
              :transition="false"
              :reverse-transition="false">
              <component :is="`${tab.name}Tab`" />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GeneralTab from './GeneralTab/GeneralTab.vue'
import AnimationsTab from './AnimationsTab/AnimationsTab.vue'
import BatteriesTab from './BatteriesTab/BatteriesTab.vue'

export default {
  components: {
    GeneralTab,
    AnimationsTab,
    BatteriesTab
  },
  data () {
    return {
      active: 0,
      tabs: [
        { name: 'General' },
        { name: 'Animations' },
        { name: 'Batteries' }
      ]
    }
  },
  created () {
    this.$store.dispatch('lights/animations')
    this.$store.dispatch('settings/batteries')
    this.setActiveTab(this.$route.params.tab)
  },
  methods: {
    setActiveTab (tabName, tabIndex) {
      if (!tabName || tabName !== this.$route.params.tab) {
        this.$router.push({
          name: 'Settings',
          params: {
            tab: tabName.toLowerCase()
          }
        })
      }

      this.active = this.tabs.indexOf(this.tabs.find(e => {
        return e.name.toLowerCase() === tabName
      }))
    }
  }
}
</script>

<style lang="scss">
  .settings-container {
    margin-bottom: 75px;
  }
</style>
