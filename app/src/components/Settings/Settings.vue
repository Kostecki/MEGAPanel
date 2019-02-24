<template>
  <v-container class="settings-container">
    <v-layout row wrap>
      <v-flex xs12 align-center>
        <v-card>
          <v-tabs
            v-model="active"
            fixed-tabs
            slider-color="primary"
          >
            <v-tab @click="setActiveTab('general')">General</v-tab>
            <v-tab-item :transition="false" :reverse-transition="false">
              <GeneralTab />
            </v-tab-item>

            <v-tab @click="setActiveTab('animations')">Animations</v-tab>
            <v-tab-item :transition="false" :reverse-transition="false">
              <AnimationsTab />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import GeneralTab from './GeneralTab/GeneralTab.vue'
import AnimationsTab from './AnimationsTab/AnimationsTab.vue'

export default {
  components: {
    GeneralTab,
    AnimationsTab
  },
  created () {
    this.setActiveTab(this.$route.params.tab)
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    setActiveTab (tab) {
      let theTab = null
      tab ? theTab = tab.toLowerCase() : theTab = 'general'

      this.$router.push({ name: 'Settings', params: { tab: theTab } })

      switch (theTab) {
        case 'general':
          this.active = 0
          break
        case 'animations':
          this.active = 1
          break

        default:
          break
      }
    }
  }
}
</script>

<style>
  .settings-container {
    margin-bottom: 75px;
  }
</style>

<style lang="scss" scoped>

</style>
