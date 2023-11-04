<template>
 <div className="w-screen bg-[url('../src/assets/weather-bg.png')] bg-opacity-20"  >
    <div class="flex flex-col min-h-screen font-Roboto">
   <navbar/> 
   <RouterView/>

  
  </div>
</div>
</template>

<script setup>
 import navbar from "./components/navbar.vue";
 import { RouterView } from "vue-router";
</script>
