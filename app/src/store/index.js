import Vue from 'vue'
import Vuex from 'vuex'

import SharedStore from './sharedStore'
import UserStore from './userStore'
import LightsStore from './lightsStore'
import SettingsStore from './settingsStore'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    shared: SharedStore,
    user: UserStore,
    lights: LightsStore,
    settings: SettingsStore
  }
})
