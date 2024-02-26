<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap gap-6 h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <router-link :to="{name: 'Home'}" class="flex h-full items-center text-xl">Vue Career</router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem"
              class="h-full ml-9 first:ml-0">
              <a href="#" class="flex h-full items-center py-2.5">{{ menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @click="loginUser" text="Sign In"
            type="primary" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import TheSubnav from "@/components/Navigation/TheSubnav.vue";
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, TheSubnav },
  data() {
    return {
      url: 'https://careers.google.com/',
      menuItems: [
        'Teams',
        'Location',
        'Life of Vue',
        'Students',
        'Jobs'
      ],
      isLoggedIn: false
    }
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn
      }
    }
  },
  methods: {
    loginUser (){
      this.isLoggedIn = true
    }
  }
}
</script>