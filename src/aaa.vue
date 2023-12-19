<template>
  <nav class="bg-gray-800">
    <div class="nav-cont flex items-center justify-between py-2">
      <div class="logo-cont">
        <h1 class="text-white font-bold text-xl pl-4">CollaBank</h1>
      </div>
      <div class="btn-cont flex space-x-5 gap-4">
        <router-link
          class="bg-gray-900 text-white rounded-md px-3 py-2 text-md font-medium"
          aria-current="page"
          to="/home"
          >Home</router-link
        >
        <div
          class="relative inline-block text-left"
          @mouseover="showDropdown"
          @mouseleave="hideDropdown"
        >
          <div>
            <button
              type="button"
              class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Profile
            </button>
          </div>
          <transition name="fade">
            <div
              v-show="isDropdownVisible"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <!-- Dropdown content -->
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
      <div
        class="profile-cont pr-3 class="
        @mouseover="showDropdown"
        @mouseleave="hideDropdown"
      >
        <button class="rounded-full bg-white overflow-hidden w-10">
          <img src="./assets/logo.png" alt="" />
        </button>
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
