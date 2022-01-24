<template>
    <div class="max-w-7xl mx-auto lg:my-48 my-28 lg:px-0 px-6">
      <div
        class="
          md:masonry-2-col
          box-border
          mx-auto
          before:box-inherit
          after:box-inherit
          gap-x-14 gap-y-4
        "
      >
        <div class="mb-10">
          <h2
            class="
              text-4xl
              tracking-tight
              font-bold
              text-gray-900
              sm:text-5xl
              md:text-6xl
              mt-10
              break-inside
            "
          >
            Projekte
          </h2>
          <small>Perfekte Lösungen für digitale Präsenz.</small>
        </div>
        <div class="mb-5 md:mb-0">
            <a href="https://wsv-arendsee.de/" target="_blank" rel="external">
          <picture
            class="
              break-inside
              shadow-lg
              rounded-lg
              transform
              transition
              duration-500
              hover:scale-105
              my-5
              h-auto
              w-auto
              ease-in-out
            "
          >
            <source srcset="wsv.webp" type="image/webp" />
            <img height="100%" width="100%" src="wsv.png" alt="wsv-arendsee.de" />
          </picture>
        </a>
        </div>
        <a href="https://drachenboot-potsdam.de/" target="_blank" rel="external">
          <picture
            class="
              break-inside
              shadow-lg
              rounded-lg
              transform
              transition
              duration-500
              hover:scale-105
              my-5
              h-auto
              w-auto
              ease-in-out
            "
          >
            <source srcset="potsdam.webp" type="image/webp" />
            <img height="100%" width="100%" src="potsdam.png" alt="drachenboot-potsdam.de" />
          </picture>
        </a>
      </div>
    </div>
</template>

<style lang="postcss" scoped>
@layer utilities {
  @variants responsive {
    .masonry-3-col {
      column-count: 3;
    }
    .masonry-2-col {
      column-count: 2;
    }
    .masonry-1-col {
      column-count: 1;
    }
    .break-inside {
      break-inside: avoid;
    }
  }
}
</style>