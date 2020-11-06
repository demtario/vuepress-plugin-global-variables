module.exports = (options = {}) => ({
  async extendPageData($page) {
    $page.global = options.variables || {}
  },
  enhanceAppFiles() {
    return [
      {
        name: 'global-variable',
        content: `
        export default ({ Vue }) => { Vue.mixin({
          computed: {
            $var() {
              return this.$page.global
            }
          }
        }) }`.trim(),
      },
    ]
  },
})
