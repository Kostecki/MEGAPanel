<template>
  <v-card flat>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="white">
      <v-btn
        v-for="(item, index) in navItems"
        :key="index"
        color="primary"
        flat
        :value="item.value"
        router
        :to="item.link"
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recent'
    }
  },
  computed: {
    navItems () {
      let navItems = [
        { icon: 'bar_chart', title: 'Statistics', value: 'statistics', link: '/statistics' },
        { icon: 'settings', title: 'Settings', value: 'settings', link: '/signin' }
      ]

      if (this.userIsAuthenticated) {
        navItems = [
          { icon: 'bar_chart', title: 'Statistics', value: 'statistics', link: '/statistics' },
          { icon: 'color_lens', title: 'Lights', value: 'lights', link: '/lights' },
          { icon: 'settings', title: 'Settings', value: 'settings', link: '/settings' }
        ]
      }

      return navItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>

<style lang="scss">
</style>
