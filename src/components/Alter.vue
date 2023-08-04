<template>
    <div>
     <button @click="handleAlter"></button>
    </div>
</template>

<script>
import SWal from 'sweetalert2'

export default {
    name:'addalter',      
    methods:{
        handleAlter(){
            SWal.fire("City added to favorite")
        }
    }
}

</script>
