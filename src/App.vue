<template lang="pug">
  main(id="contenedor",class="container1 f98",)
    mheader
    palette(v-show="show_palette")
    mContainer1(:col="color1",style="overflow:hidden")
    mContainer2(:col="color2",style="overf---low:hidden")
    mContainer3(:col="color1",style="overflow:hidden")
    mContainer4(:col="color2",style="overflow:hidden")
    //- //com(v-bind:obj='scroll')
    ccanvas(v-bind:obj_scroll='scroll',v-bind:obj_size='size',style="z-index:-99")
    mfooter
</template>

<script id="1">
import vars from './assets/js/varscss'
import lib from './assets/js/lib'
export default {
  name: 'app',
  data () {
    return {
      obj:{
        msg:"eee",com:"333"
      },
      show_palette:true,
      cssvars:{
        'color1alfa':'rgba(37, 150, 190,0.2)',
        'color1':"#02172a",
        'color2':"#062740",
        'color3':"#103352",
        'color4':"#163c5e",
        'color5':"#2a5174",
        'color6':"#a2c0d2",
        'color7':"#CCFFFF",
        'colorComplementario':"#dbac68",
        'colorComplementario2':'#ff9966',
        'color8':'#00AAD4',
        'color9':'#0088AA',
        'color10':'#55DDFF',
        'color11':'#00D4AA',
        'color12':'#80FFE6',
        'color13':'#008066',
        'text_size1':"2rem",
        'text_size2':"1rem",
        'text_size3':"1.5rem",
        'text_size4':"0.7rem",
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
      vars.colors(this.cssvars)
      this.size = lib.size()
      vars.setsize(this.size.mwidth,this.size.mheight)
      window.addEventListener("scroll",this.onScroll,true)
      window.addEventListener("resize",this.onResize,true)
      this.pers_containers = lib.relations_3d(this.size.mheight)


  }}
  
</script>

<style>
@import './assets/styles/main.css'
</style>