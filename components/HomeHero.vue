<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 lg:h-screen bg-white lg:max-w-2xl lg:w-full">
        <svg
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-48
            text-white
            transform
            translate-x-1/2
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main
          class="
            my-auto
            mt-10
            lg:mt-0 lg:h-screen
            flex
            items-center
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div class="text-center lg:text-left">
            <slot></slot>
          </div>
        </main>
      </div>
    </div>
    <div
      class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 w-full mt-10 lg:mt-0"
    >
      <img
        class="
          h-56
          w-full
          lg:object-cover
          object-contain
          sm:h-72
          md:h-96
          lg:w-full lg:h-full
        "
        src="/me.jpeg"
        alt="Maximilian Flechtner"
        height="100vh"
        width="100vw"
      />
    </div>
  </div>
</template>