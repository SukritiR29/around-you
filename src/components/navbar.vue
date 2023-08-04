<template>
    <header class="sticky top-0 bg-weather-primary shadow-lg z-40 backdrop-blur-lg">
      <nav
        class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6 z-40"
      >
        <RouterLink :to="{ name: 'home' }">
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-sun-cloud text-2xl"></i>
            <p class="text-2xl pl-5">Around You</p>
          </div>
        </RouterLink>
      
        <div class="flex gap-10 flex-1 justify-end">
          <transition name="alert">
            <Alert/>
          </transition>
          <i
            class="fa-solid fa-circle-info text-2xl text-right hover:text-weather-secondary duration-150 cursor-pointer pr-0"
            @click="toggleAbout"
          ></i>
          <div>
          <i
            class="fa-solid fa-plus text-2xl hover:text-secondary duration-150 cursor-pointer mr-0 "
          @click="addCity">
          </i>
          </div>
        </div>
  
        <About
          :aboutActive="aboutActive"
          @close-about="toggleAbout"
        >
        </About>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { RouterLink, useRoute, useRouter } from "vue-router";
  import { ref } from "vue";
  import About from "./About.vue";
  import store from "../store/store";
  
  const saved = ref([]);
  const route = useRoute();
  const router = useRouter();
  const addCity = () => {
  
    console.log('saved')
    if(store.state.city && !(store.state.savedCities.includes(store.state.city)) )  {
    store.state.savedCities.push(store.state.city);
    console.log('reached here')
    }
    alert("City added to favorites")
  };

  const aboutActive = ref(null);
  const toggleAbout = () => {
    aboutActive.value = !aboutActive.value;

   
  };


  </script>