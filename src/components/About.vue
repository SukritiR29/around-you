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
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </p>
            <h2 class="text-2xl">How it works:</h2>
            <ol class="list-decimal list-inside mb-4">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ol>

            <h2 class="text-2xl">Removing a city</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
            <button
              class="text-white mt-8 bg-emerald-950 py-2 px-6 rounded-xl"
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