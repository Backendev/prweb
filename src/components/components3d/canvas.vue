<template lang="pug">
    #canvas(class="f98")
</template>

<script>
import * as THREE from "three";
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
//import scene from '../../assets/services/scene'

export default {
    name: "HelloWorld",
    data() {
        return {
        background: 0x0080ff,
        alpha: 0,
        canvas: "canvas",
        width: "100%",
        height: window.innerHeight+"px",
        pading:0
        };
    },
    methods: {
        // pinaCollada(modelname, scale,material) { 
        


    },
    mounted() {
        
        console.log("222")
        
    },
}
</script>
<style lang="css">
    @import '../.././assets/styles/components.css' 
    
</style>