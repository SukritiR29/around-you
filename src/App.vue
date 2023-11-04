  <template>
    <div className="w-screen bg-opacity-20"  >
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

<style>
.w-screen {
  background-image: url('../src/assets/weather-bg.png'); /* Update the path if needed */
  background-size: cover;
  background-position: center;
  /* Add other styles as needed */
}
</style>