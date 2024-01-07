<template>
  <Teleport to="body">
    <Transition name="about-outer">
      <div
        v-show="aboutActive"
        class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
      >
        <Transition name="about-inner">
          <div
            v-if="aboutActive"
            class="p-4 bg-teal-700 self-start mt-32 max-w-screen-md rounded-xl"
          >
          <div class="text-black bg-teal-700 text-white ">
            <h1 class="text-2xl mb-1 text-white">About:</h1>
            <p class="mb-4">
              Around You is a weather application that provides real-time weather updates for cities around the globe. The project is built using VueJS, VueX, TailwindCSS, and the Open Weather API. This application serves as a comprehensive example of working with JavaScript libraries, styling libraries, and API integrations within a project.
            </p>
            <h2 class="text-2xl">How it works:</h2>
            <ol class="list-decimal list-inside mb-4">
              <li>
                Real-time weather updates for cities worldwide.
              </li>
              <li>
                User-friendly interface built with VueJS and TailwindCSS.
              </li>
              <li>
                Integration with the Open Weather API for accurate and up-to-date weather information.
              </li>
              <li>
                Ability to add desired cities to your favorite list.
              </li>
              <li>
                Organized view to keep track of your favorite cities and their weather conditions.
              </li>
            </ol>

            <h2 class="text-2xl">Tech Stack</h2>
           <ol>
            <li>
              VueJS: A progressive JavaScript framework for building user interfaces.
            </li>
            <li>
              VueX: A state management pattern and library for Vue.js applications.
            </li>
            <li>
              TailwindCSS: A utility-first CSS framework for rapid UI development.
            </li>
            <li>
              Open Weather API: Provides weather data for cities worldwide.
            </li>
           </ol>
          </div>
            <button
              class="text-white bg-teal-900 mt-4  py-2 px-6 rounded-xl"
              @click="$emit('close-about')"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineEmits(["close-about"]);
defineProps({
  aboutActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.about-outer-enter-active,
.about-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.about-outer-enter-from,
.about-outer-leave-to {
  opacity: 0;
}

.about-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.about-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.about-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.about-inner-leave-to {
  transform: scale(0.8);
}
</style>
