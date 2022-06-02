<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div className="bg-gradient-to-r from-sky-900 to-zinc-800 min-h-screen">
    <Navbar />
    <RouterView />
  </div>
</template>

<style>
</style>
