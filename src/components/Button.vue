<template>
  <li @click="handleClick(buttonName)" :class="btnClass">{{ buttonName }}</li>
</template>

<script>
export default {
  props: ['handleClick', 'btnClass', 'buttonName'],
}
</script>