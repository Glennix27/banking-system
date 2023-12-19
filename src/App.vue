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
          class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
          aria-current="page"
          to="/bank"
          >Banks</router-link
        >
        <router-link
          class="text-white rounded-md px-3 py-2 text-sm font-medium"
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
          <button class="rounded-full bg-white overflow-hidden w-10">
            <img src="./assets/logo.png" alt="" />
          </button>
        </div>
        <transition name="fade">
          <div
            v-show="isDropdownVisible"
            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <a href="#" class="block px-4 py-2 text-sm text-gray-700"
              >Settings</a
            >
            <a href="#" class="block px-4 py-2 text-sm text-gray-700"
              >Sign out</a
            >
          </div>
        </transition>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
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
