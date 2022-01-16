<template>
  <div
    class="
      max-w-md
      py-10
      px-8
      bg-white
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
    <div class="flex items-center">
      <div class="w-1/4 flex items-center"> 
        <font-awesome-icon :class="color + ' text-6xl'" :icon="icon" />
      </div>
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">{{ title }}</h2>
        <p class="mt-2 text-gray-600">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'icon', 'color'],
}
</script>