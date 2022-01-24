<template>
  <div
    class="
      max-w-md
      py-10
      px-8
      bg-white
      dark:bg-gray-800
      shadow-lg
      rounded-lg
      my-5
      transform
      transition
      duration-500
      hover:scale-105
      ease-in-out
    "
  >
    <div class="md:flex items-center">
      <div class="w-1/4 flex items-center mb-4 md:mb-0"> 
        <font-awesome-icon :class="color + ' text-6xl'" :icon="icon" />
      </div>
      <div class="w-full">
        <h2 class="text-gray-800 dark:text-gray-100 text-3xl font-semibold">{{ title }}</h2>
        <p class="mt-2 dark:text-gray-400 text-gray-600">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'icon', 'color'],
}
</script>