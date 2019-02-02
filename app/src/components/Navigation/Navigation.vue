<template>
  <v-card flat>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="white">
      <v-btn
        v-for="(item, index) in menuItems"
        :key="index"
        color="#FF3D02"
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
        bottomNav: 'recent',
        menuItems: [
          { icon: 'color_lens', title: 'Lights', value: 'lights', link: '/lights' },
          { icon: 'bar_chart', title: 'Statistics', value: 'statistics', link: '/statistics' },
          { icon: 'settings', title: 'Settings', value: 'settings', link: '/settings' }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
