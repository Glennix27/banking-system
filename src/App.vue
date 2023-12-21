<template>
  <nav class="bg-gray-800">
    <div class="nav-cont flex items-center justify-between py-4">
      <div class="logo-cont">
        <router-link class="text-white font-bold text-xl pl-4" to="/home"
          >CollaBank</router-link
        >
      </div>
      <div class="btn-cont flex space-x-5 gap-4">
        <router-link
          class="text-white rounded-md px-3 py-2 text-sm font-medium"
          :class="{ 'bg-gray-900': $route.path === '/bank' }"
          aria-current="page"
          to="/bank"
          >Banks</router-link
        >
        <router-link
          class="text-white rounded-md px-3 py-2 text-sm font-medium"
          :class="{ 'bg-gray-900': $route.path === '/finance' }"
          to="/finance"
          >Finance</router-link
        >
      </div>
      <div class="relative">
        <div
          class="profile-cont pr-4"
          @mouseover="showDropdown"
          @mouseleave="hideDropdown"
        >
          <router-link to="/profile"
            ><img
              class="rounded-full bg-white overflow-hidden w-10"
              src="./assets/logo.png"
              alt=""
          /></router-link>
        </div>
        <transition name="fade">
          <div
            v-show="isDropdownVisible"
            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <router-link
              class="block px-4 py-2 text-sm text-gray-700"
              to="/setting"
              >Settings</router-link
            >

            <router-link
              class="block px-4 py-2 text-sm text-gray-700"
              to="/login"
              >Sign Out</router-link
            >
          </div>
        </transition>
      </div>
    </div>
  </nav>
  <router-view class="flex-1"></router-view>
  <div class="footer bg-gray-800 text-white py-4 sticky-bottom"></div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownVisible: false,
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
