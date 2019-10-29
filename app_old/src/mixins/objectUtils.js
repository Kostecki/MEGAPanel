export const objectUtils = {
  methods: {
    hasEmptyProperties (obj) {
      if (!obj) {
        return null
      }

      return Object.values(obj).every(e => !e)
    }
  }
}
