<template>
  <div class="flex items-center">
    <font-awesome-icon
      class="
        text-4xl
        transition
        duration-500
        ease-out
        mr-3
        text-gray-900
        dark:text-gray-100
      "
      :icon="['fas', 'water']"
    />
    <h4
      class="
        text-4xl
        tracking-tight
        font-bold
        text-gray-900
        dark:text-gray-100
        transition
        duration-500
        ease-out
        sm:text-xl
        md:text-2xl
      "
    >
      {{title}}
    </h4>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>