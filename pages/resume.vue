<template>
  <div>
    <HomeHero>
      <span class="text-yellow-400 text-2xl">Hey! Ich bin </span>
      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-gray-900
          dark:text-gray-100
          sm:text-5xl
          md:text-6xl
        "
      >
        Maximilian <span class="text-yellow-400">Flechtner</span>
      </h1>
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
        <div class="rounded-md shadow md:ml-3 mt-2 md:mt-0">
          <a
            href="Maximilian_Flechtner_-_Fachinformatiker_für_Anwendungsentwicklung.pdf"
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
            Lebenslauf herunterladen
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
      <div></div>
      <div>
        <small class="text-yellow-400 text-2xl"> Einführung </small>
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
          Über mich
        </h2>

        <div class="grid grid-cols-2">
          <div>Telefon:</div>
          <div><a href="tel:0176 41766223">0176 41766223</a></div>
          <div>E-Mail:</div>
          <div>
            <a href="mailto:flechtner@techno1ogy.de">flechtner@techno1ogy.de</a>
          </div>
        </div>

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
            mt-5
            mb-2
          "
        >
          Meine Interessen
        </h4>
        <div
          class="
            grid grid-cols-1
            md:grid-cols-3
            dark:text-gray-100
            transition
            duration-500
            ease-out
          "
        >
          <div class="flex items-center">
            <font-awesome-icon
              class="
                text-4xl text-green-400
                transition
                duration-500
                ease-out
                mr-3
              "
              :icon="['fas', 'water']"
            />
            Wassersport
          </div>
          <div class="flex items-center">
            <font-awesome-icon
              class="
                text-4xl text-green-400
                transition
                duration-500
                ease-out
                mr-3
              "
              :icon="['fas', 'camera-retro']"
            />
            Fotografieren
          </div>
          <div class="flex items-center">
            <font-awesome-icon
              class="
                text-4xl text-green-400
                transition
                duration-500
                ease-out
                mr-3
              "
              :icon="['fas', 'laptop-code']"
            />
            Programmieren
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-gray-50 dark:bg-gray-800 transition duration-500 ease-out py-20"
    >
      <div class="flex justify-center">
        <small class="text-yellow-400 text-2xl">
          Warum sollten Sie mich wählen
        </small>
      </div>
      <div class="flex justify-center">
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
          Meine Fähigkeiten
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-x-20 mt-10"
      >
        <Progress-Bar percent="100" title="Flutter" />
        <Progress-Bar percent="100" title="Dart" />
        <Progress-Bar percent="100" title="WordPress" />
        <Progress-Bar percent="100" title="PHP" />
        <Progress-Bar percent="100" title="HTML/CSS" />
        <Progress-Bar percent="60" title="JavaScript" />
        <Progress-Bar percent="60" title="Git" />
      </div>
    </div>

    <div class="py-20">
      <div class="flex justify-center">
        <small class="text-yellow-400 text-2xl">Meine Qualifikation</small>
      </div>
      <div class="flex justify-center">
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
          Lebenslauf
        </h2>
      </div>

      <div class="max-w-4xl mx-auto mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
          <Education-Box title="Berufserfahrung" />
          <Education-Box title="Schulbildung" />
          <Education-Box title="Praktika" />
        </div>
      </div>
    </div>
  </div>
</template>