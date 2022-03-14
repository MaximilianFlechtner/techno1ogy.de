<template>
  <div>
    <HomeHero>
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
      >
        <span class="block xl:inline">Maximilian</span>
        <span class="block text-yellow-400 xl:inline">Flechtner</span>
      </h1>
      <p
        class="
          mt-3
          text-base text-gray-500
          dark:text-gray-400
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
              transition
              ease-in
              duration-200
              md:py-4 md:text-lg md:px-10
            "
          >
            Schreib mir!
          </a>
        </div>
      </div>
    </HomeHero>

    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:my-40
        my-20
        max-w-7xl
        mx-auto
        lg:px-0
        px-6
      "
    >
      <div class="mb-20 md-mb-0">
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
          <small class="dark:text-gray-100 transition duration-500 ease-out"
            >Einführung</small
          >
          <h2
            class="
              text-4xl
              tracking-tight
              font-bold
              text-gray-900
              dark:text-gray-100
              transition
              duration-500
              ease-out
              sm:text-5xl
              md:text-6xl
              mt-5
            "
          >
            Hey! Ich bin Maximilian
            <span class="text-yellow-400">Flechtner</span>
          </h2>
          <div
            class="
              text-gray-900
              dark:text-gray-100
              transition
              duration-500
              ease-out
              mt-10
              text-xl
            "
          >
            Ich habe Erfahrung im Aufbau von iOS- und Android-Apps sowie mit der
            Web-Entwicklung. Mittlerweile Programmiere ich seit 5 Jahren.
            Angefangen habe ich mit der Web-Entwicklung, mittlerweile
            interessiere ich mich hauptsächlich für die App Entwicklung.
            Besonders interessant finde ich das Framework Flutter. Es fasziniert
            mich von Tag zu Tag aus neue. Interessant ist jedoch nicht nur die
            Technik hinter dem Projekt, sondern auch die Geschichte. In meiner
            Freizeit Fotografiere ich gern.
          </div>
          <div class="mt-12">
            <div class="grid grid-cols-3 w-48">
              <a
                target="_blank"
                href="https://www.instagram.com/maximilian_technology/"
                rel="noopener noreferrer"
                aria-label="Instagram Maximilian Flechtner"
              >
                <font-awesome-icon
                  class="
                    text-4xl
                    dark:text-gray-100
                    transition
                    duration-500
                    ease-out
                  "
                  :icon="['fab', 'instagram']"
                />
              </a>
              <a
                target="_blank"
                href="https://github.com/MaximilianFlechtner"
                rel="noopener noreferrer"
                aria-label="GitHub Maximilian Flechtner"
              >
                <font-awesome-icon
                  class="
                    text-4xl
                    dark:text-gray-100
                    transition
                    duration-500
                    ease-out
                  "
                  :icon="['fab', 'github']"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/maximilian-flechtner-49030922b/"
                rel="noopener noreferrer"
                aria-label="Linkedin Maximilian Flechtner"
              >
                <font-awesome-icon
                  class="
                    text-4xl
                    dark:text-gray-100
                    transition
                    duration-500
                    ease-out
                  "
                  :icon="['fab', 'linkedin']"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Home-Projects></Home-Projects>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
