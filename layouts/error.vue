<template>
  <div class="dark:bg-gray-900 transition duration-500 ease-out">
    <HomeHero>
      <h1
        v-if="error.statusCode === 404"
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-gray-900
          dark:text-gray-100
          transition
          duration-500
          ease-out
          sm:text-5xl
          md:text-6xl
        "
      >
        Seite nicht gefunden
      </h1>

      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-gray-900
          dark:text-gray-100
          transition
          duration-500
          ease-out
          sm:text-5xl
          md:text-6xl
        "
        v-else
      >
        Es ist ein Fehler aufgetreten
      </h1>

      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <NuxtLink
            to="/"
            class="
              w-full
              flex
              items-center
              justify-center
              px-8
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-white
              bg-green-400
              hover:bg-green-500
              transition
              ease-in
              duration-200
              md:py-4 md:text-lg md:px-10
            "
          >
            Home
          </NuxtLink>
        </div>
      </div>
    </HomeHero>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>
