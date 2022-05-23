<template>
  <div class="detail-event">
      <Navbar/>
      <h1>{{events.nameEvent}}</h1>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios';
export default {
    name:'event-detail',
    components:{
        Navbar,
    },
    data(){
        return{
            events:{},
        }
    },
    methods:{
        setEvent(data){
            this.events=data;
        }
    },
    mounted(){
        axios
        .get("http://localhost:3000/events/1")
        .then((response)=> this.setEvent(response.data))
        .catch((error)=>console.log(error));
        console.warn(this.events);
    },
}

</script>

<style>

</style>