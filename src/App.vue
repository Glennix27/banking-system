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
        <router-link
          class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          to="/profile"
          >Profile</router-link
        >
      </div>
      <div class="profile-cont pr-3">
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
export default {};
</script>
