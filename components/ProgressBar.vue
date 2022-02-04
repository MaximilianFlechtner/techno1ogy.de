<template>
  <div>
    <div class="flex justify-between text-gray-900 dark:text-gray-100">
      <div>{{ title }}</div>
      <div>{{ percent }}%</div>
    </div>
    <div class="w-full bg-gray-200 h-5 mb-6">
      <div class="bg-green-400 h-5" :style="'width:' + percent + '%'"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['percent', 'title'],
}
</script>