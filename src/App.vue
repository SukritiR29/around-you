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
  background-image: url('../src/assets/weather-bg.png'); 
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0; 

}

</style>
