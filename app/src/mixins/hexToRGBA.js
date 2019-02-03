export default {
  methods: {
    hexToRGBA (colorHex, brightness) {
      console.log(brightness)
      let hex = colorHex.replace('#', '')

      let rgbObj = {
        a: brightness,
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
      }

      return rgbObj
    }
  }
}
