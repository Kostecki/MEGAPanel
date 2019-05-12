export const formatColors = {
  methods: {
    hexToRGBA: function (colorHex, brightness) {
      let hex = colorHex.replace('#', '')
      let rgbObj = {
        a: brightness,
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
      }

      return rgbObj
    },
    rgbToHex: function (r, g, b) {
      function componentToHex (c) {
        var hex = c.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }

      return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
    }
  }
}
