<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      default: 'Sign in',
      required: true
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true
      }
    }
  },
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium
}

.primary {
  @apply border-0 text-white bg-brand-blue-1
}

.secodary {
  @apply bg-transparent text-brand-blue-2
}
</style>