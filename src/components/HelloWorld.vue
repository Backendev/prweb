<template lang="pug">
  main(id="contenedor",class="container1 f98",)
    palette(v-show="show_palette")
    mContainer1(:col="color1",style="overflow:hidden")
    mContainer2(:col="color2",style="overflow:hidden")
    mContainer3(:col="color1",style="overflow:hidden")
    mContainer4(:col="color2",style="overflow:hidden")
    ccanvas
</template>

<script id="1">
import vars from '@/assets/js/varscss.js'
import lib from '@/assets/js/lib.js'
export default {
  name: 'app',
  data () {
    return {
      show_palette:true,
      colors:{
        '--colorOscuro1':"#02172a",
        '--colorOscuro2':"#062740",
        '--colorOscuro3':"#103352",
        '--colorOscuro4':"#163c5e",
        '--colorOscuro5':"#2a5174",
        '--colorOscuro6':"#a2c0d2",
        '--colorComplementario':"#dbac68"
      },
      size:{
        mwidth:0,
        mheight:0,
        orientation:""
      },
      color1:"f98",
      color2:"f98",
      pers_containers : 0,
      scroll:{
        scrolly:0,
        hposition_ant:0,
        hposition:0,
        spherepos:0,
        rel_scroll:0,
        section:0
        
      }


      
    }},
    methods:{
      onScroll(e){
        this.scroll.hposition_ant = this.scroll.hposition
        this.scroll = lib.scrolling(this.size.mheight,this.scroll.hposition_ant,this.pers_containers)
        lib.rotContainers(this.scroll.spherepos,this.pers_containers,this.scroll.scrolly)
      },
      onResize(e){
        this.size = lib.size()
        
        vars.setsize(this.size.mwidth,this.size.mheight)
        this.pers_containers = lib.relations_3d(this.size.mheight)
      }
    },
    mounted() {
      vars.colors(this.colors)
      this.size = lib.size()
      vars.setsize(this.size.mwidth,this.size.mheight)
      window.addEventListener("scroll",this.onScroll,true)
      window.addEventListener("resize",this.onResize,true)
      this.pers_containers = lib.relations_3d(this.size.mheight)


  }}
  
</script>

<style>


</style>