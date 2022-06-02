<template>
  <div className="p-5 lg:w-4/5 lg:mx-auto lg:p-0 lg:mt-24">

    <p className="text-sky-100 font-semibold italic text-2xl mt-24 text-right">
      &ldquo;
      {{ quote.quote }}
      &rdquo;
    </p>
    <p className="text-zinc-400 text-lg text-right italic my-5">
      —
      {{ quote.author }}
    </p>
  </div>
</template>

<script setup>
import { getAnyQuote } from '../logic/quotes';
import { onMounted, onUnmounted, ref } from 'vue';

const quote = ref(getAnyQuote());
let rotator;

onMounted(() => {
  rotator = setInterval(() => {
    quote.value = getAnyQuote();
  }, 5000)
})

onUnmounted(() => clearInterval(rotator))
</script>