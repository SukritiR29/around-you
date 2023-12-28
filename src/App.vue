  <template>
    <div className="lg-w-screen bg-emerald-950"  >
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
  background-image: url('../src/assets/weather-bg.png'); 
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0; 

}

</style>