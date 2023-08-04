<template>
  <div class="grid grid-cols-3 gap-1 justify-center ml-20" >
    <div  v-for="city in $store.state.savedCities">
      <div>
        <CityCard 
        :city="city"/>
        </div>
    </div>
  </div>
    <div>
    <div class=" Liked flex justify-center pl-5">
      <router-link to="/">
      <button class="bg-secondary hover:bg-black hover:text-white mt-7 text-primary font-bold py-2 px-4 rounded">
   Back</button>
  </router-link>
  </div>
  </div>
  </template>
    

<script>
  import {onMounted} from 'vue'
  import store from '../store/store';
import CityCard from '../components/cityCard.vue';
  export default{
    components: { CityCard },
    setup() {
        onMounted(() => {
            console.log(store.state.savedCities);
        });
    },
};
</script>