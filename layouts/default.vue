<template>
  <div class="dark:bg-gray-900 transition duration-500 ease-out">
    <button
    aria-label="Erscheinungsbild umschalten"
      @click="
        $colorMode.preference == 'dark'
          ? ($colorMode.preference = 'light')
          : ($colorMode.preference = 'dark')
      "
      class="
        p-0
        w-16
        h-16
        bg-yellow-400
        rounded-full
        hover:bg-yellow-500
        active:shadow-lg
        mouse
        shadow
        transition
        ease-in
        duration-200
        focus:outline-none
        fixed
        bottom-10
        right-10
        z-10
      "
    >
      <font-awesome-icon
        class="text-3xl text-white"
        :icon="$colorMode.preference == 'dark' ? 'sun' : 'moon'"
      />
    </button>
    <Nuxt />
    <Home-Social></Home-Social>
    <Page-Footer></Page-Footer>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      cookies: this.$cookies,
    }
  },
}
</script>
