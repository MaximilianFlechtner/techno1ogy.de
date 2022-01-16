<template>
  <div>
    <HomeHero>
      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-gray-900
          sm:text-5xl
          md:text-6xl
        "
      >
        <span class="block xl:inline">Maximilian</span>
        <span class="block text-yellow-400 xl:inline">Flechtner</span>
      </h1>
      <p
        class="
          mt-3
          text-base text-gray-500
          sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
          md:mt-5 md:text-xl
          lg:mx-0
        "
      >
        Ich bin Maximilian ein <span class="text-yellow-300">App</span> und
        <span class="text-yellow-300">Web Entwickler</span> aus Arendsee.
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <a
            href="mailto:flechtner@techno1ogy.de"
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
              md:py-4 md:text-lg md:px-10
            "
          >
            Schreib mir!
          </a>
        </div>
      </div>
    </HomeHero>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:my-40 my-20 max-w-7xl mx-auto lg:px-0 px-6">
      <div>
        <HomeCard
          title="Web Entwicklung"
          description="Ich erstelle individuelle Webseiten"
          icon="window-maximize"
          color="text-yellow-400"
        ></HomeCard>
        <HomeCard
          title="App Entwicklung"
          description="Von der Idee bis zur fertigen App"
          icon="mobile"
          color="text-green-400"
        ></HomeCard>
        <HomeCard
          title="Fotografie"
          description="Begeisterter Hobbyfotograf"
          icon="camera-retro"
          color="text-yellow-400"
        ></HomeCard>
      </div>
      <div class="flex items-center mt-10 lg:mt-0">
        <div>
          <small>Einführung</small>
          <h2
            class="
              text-4xl
              tracking-tight
              font-bold
              text-gray-900
              sm:text-5xl
              md:text-6xl
              mt-10
            "
          >
            Hey! Ich bin Maximilian
            <span class="text-yellow-400">Flechtner</span>
          </h2>
          <div class="text-gray-900 mt-10 text-xl">
            Jedes großartiges Projekt beginnt mit einer noch besseren
            Geschichte.
          </div>
          <div class="mt-5">
            <a target="_blank" href="https://www.instagram.com/maximilian_technology/">
              <font-awesome-icon class="text-4xl" :icon="['fab', 'instagram']" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto lg:my-48 my-24 lg:px-0 px-6">
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
        <a href="https://wsv-arendsee.de/" target="_blank">
          <img
            src="wsv.png"
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
            alt="wsv-arendsee.de"
          />
        </a>
        <a href="https://drachenboot-potsdam.de/" target="_blank">
        <img
          src="potsdam.png"
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
          alt="drachenboot-potsdam.de"
        />
        </a>
      </div>
    </div>
    <Home-Social></Home-Social>

    <Page-Footer></Page-Footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

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
