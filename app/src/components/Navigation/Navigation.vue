<template>
  <v-card
    flat
    class="navigation-card">
    <v-bottom-navigation
      v-model="bottomNav"
      :value="true"
      fixed
      color="white">
      <v-btn
        v-for="(item, index) in navItems"
        :key="index"
        color="primary"
        text
        :value="item.value"
        router
        :to="item.link"
        style="width: 100%">
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
      return this.$store.getters['user/isAuthenticated']
    }
  }
}
</script>

<style lang="scss">
  .navigation-card {
    span {
      font-weight: 400;
    }
  }
</style>
