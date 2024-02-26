<template>
  <div>
    <img :src="imageSrc" alt="Profile image"
      class="w-8 h-8 rounded-3xl object-contain">
  </div>
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageSrc: 'https://cdn-icons-png.flaticon.com/256/7749/7749446.png'
    }
  }
}
</script>