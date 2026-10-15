export default {
  data() { return { selectedProject: null, previousFocus: null, previousBodyOverflow: '' } },
  beforeDestroy() {
    if (process.client) {
      document.removeEventListener('keydown', this.onDetailsKeydown)
      if (this.selectedProject) document.body.style.overflow = this.previousBodyOverflow || ''
    }
  },
  methods: {
    openDetails(project) {
      this.previousFocus = document.activeElement
      this.selectedProject = project
      this.previousBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', this.onDetailsKeydown)
      this.$nextTick(() => {
        if (this.$refs.detailsClose) this.$refs.detailsClose.focus()
      })
    },
    closeDetails() {
      this.selectedProject = null
      document.body.style.overflow = this.previousBodyOverflow || ''
      document.removeEventListener('keydown', this.onDetailsKeydown)
      this.$nextTick(() => {
        if (this.previousFocus && this.previousFocus.focus) this.previousFocus.focus()
      })
    },
    onDetailsKeydown(event) {
      if (event.key === 'Escape' && this.selectedProject) this.closeDetails()
    },
    trapDetailsFocus(event) {
      const dialog = this.$refs.detailsDialog
      if (!dialog) return
      const elements = Array.from(dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'))
      if (!elements.length) return
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
  }
}
