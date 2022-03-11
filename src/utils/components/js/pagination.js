export default {
  name: 'Pagination',
  props: {
    maxPage: Number,
    activePage: Number
  },
  methods: {
    handleClick(page) {
      this.$emit('nav-clicked', page - 1)
    }
  }
}
