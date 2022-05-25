<template>
  <li @click="handleClick(buttonName)" :class="btnClass">{{ buttonName }}</li>
</template>

<script setup>
  defineProps(['handleClick', 'btnClass', 'buttonName'])
</script>