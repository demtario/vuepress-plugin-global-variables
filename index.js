module.exports = (options = {}) => ({
  async extendPageData($page) {
    $page.global = options.variables || {}
  },
})
