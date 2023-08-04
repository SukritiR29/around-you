<template>
    <div  class="flex flex-col py-6 backdrop-blur-lg rounded-md shadow-md cursor-pointer gap-8 mb-6 w-40 text-center ml-10 mt-10 text-white">
    <div class="flex flex-col flex-1 text-white text-center">
        <p class="text-lg text-white text-center font-italic">{{ time.split(" ")[1] }}</p>
        <p class="text-lg text-white text-center font-bold">{{ Math.floor(temp - 273.15) }}°C</p>
        <p class="text-lg text-white text-center ">{{ desc }}</p>
    </div>
    </div>
</template>

<script>
    export default{
        name: "WeeklyCard",
        props:["temp", "desc", "time"]
    }

</script>


