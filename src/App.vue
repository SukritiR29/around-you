<template>
  <div class="lg-w-screen lg-h-screen  relative">
    <div class="w-screen" style="position: absolute; filter:blur(3vh);"></div>
    <div class="flex flex-col min-h-screen font-Roboto relative">
      <navbar class="" />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import navbar from "./components/navbar.vue";
import { RouterView } from "vue-router";
</script>

<style>
.w-screen {
  position: absolute;
  background-image: url('../src/assets/weather-bg.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  
}

/* Add a pseudo-element for the blurred effect behind the navbar */
.w-screen::before {
  content: '';
  position: absolute;
  background-image: inherit;
  background-size: cover;
  background-position: center;
  filter: blur(10px);
   /* Adjust the blur intensity */
  
}

/* Ensure the navbar is positioned on top of the blurred background */
navbar {
  position: relative;
  
  backdrop-filter: blur(10px); /* Adjust the blur intensity */
}
</style>
