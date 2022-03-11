export default {
  methods: {
    updateQuery (query, replace = true) {
      const newQuery = {
        ...this.$route.query,
        ...query
      }
      if (replace) {
        this.$router.replace({
          query: newQuery
        })
        return
      }
      this.$router.push({
        query: newQuery
      })
    }
  }
}
