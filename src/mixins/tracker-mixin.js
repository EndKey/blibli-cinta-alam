export default {
  directives: {
    observe: {
      bind(element, binding) {
        const observer = new IntersectionObserver((entries, self) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            binding.value.handler(binding.value.payload)
            self.unobserve(entry.target)
          })
        })
        observer.observe(element)
      },
    },
  },
  methods: {
    trackLoad() {
      // empty intended
    },
  },
}
