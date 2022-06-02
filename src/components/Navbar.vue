<template>
  <nav class="md:flex justify-between items-center md:mx-5 lg:w-4/5 lg:mx-auto">
    <h1 class="text-rose-500 text-3xl text-center py-10 font-bold" :style="{
      textShadow: '1px 1px 1px rgba(206,206,206,0.7)'
    }">Math Magicians</h1>
    <ul className="flex justify-around md:gap-x-5">
      <li>
        <RouterLink to="/" class="text-rose-500 hover:text-rose-400 font-semibold p-2">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/calculator" class="text-rose-500 hover:text-rose-400 font-semibold p-2">
          Calculator</RouterLink>
      </li>
      <li>
        <RouterLink to="/quote" class="text-rose-500 hover:text-rose-400 font-semibold p-2">
          Quote</RouterLink>
      </li>
    </ul>
  </nav>
</template>