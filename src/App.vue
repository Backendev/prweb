<template lang="pug">
main#contenedor.container1.f98
  mheader
  palette(v-show="show_palette")
  mContainer1(:col="color1", style="overflow: hidden")
  mContainer2(:col="color2", style="overf---low: hidden")
  mContainer3(:col="color1", style="overflow: hidden")
  mContainer4(:col="color2", style="overflow: hidden")
  //- //com(v-bind:obj='scroll')
  ccanvas(
    v-if="render_c",
    v-bind:obj_scroll="scroll",
    v-bind:obj_size="size",
    style="z-index: -99"
  )
  mfooter
</template>

<script id="1">
import vars from './assets/js/varscss'
import lib from './assets/js/lib'
export default {
  name: 'app',
  data () {
    return {
      render_c : true,
      obj:{
        msg:"eee",com:"333"
      },
      show_palette:false,
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
        'height_app_a':0.28,
        'height_app_ab':0.05,
        'height_app_ac':0.23,
        'height_app_b':'100%',
        'width_app_b':'40%',
        'input_size':0.812,
        'button_size':0.05,
        'padding_button':0.025
        // 'container_section_display':"flex",
        // "sections_width":0.94,
        // "sections_height":0.47,
        // 'container_section_display':"block",
        // "sections_width":0.91,
        // "sections_height":0.40,
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
      render_com(){
        this.render_c = true
      },
      onScroll(e){
        this.scroll.hposition_ant = this.scroll.hposition
        this.scroll = lib.scrolling(this.size.mheight,this.scroll.hposition_ant,this.pers_containers)
        lib.rotContainers(this.scroll.spherepos,this.pers_containers,this.scroll.scrolly)
        
      },
      onResize(e){
        this.render_c = false
        this.size = lib.size()
        if(this.size.orientation == "ancho"){
          this.cssvars.container_section_display = "flex"
          this.cssvars.sections_width = 0.94
          this.cssvars.sections_height =0.47
          this.cssvars.height_app_a = 0.28
          this.cssvars.height_app_ab = 0.05
          this.cssvars.height_app_ac = 0.23
          this.cssvars.height_app_b = '100%'
          this.cssvars.width_app_b = '40%'
          this.cssvars.text_size1 = "2vw"
          this.cssvars.text_size2 = "1vw"
          this.cssvars.text_size3 = "1.5vw"
          this.cssvars.text_size4 = "0.7vw"
          this.cssvars.input_size = 0.812
          this.cssvars.button_size = 0.05
          this.cssvars.padding_button = 0.025
        }
        if(this.size.orientation == "alto"){
          this.cssvars.container_section_display = "block"
          this.cssvars.sections_width = 0.91
          this.cssvars.sections_height =0.44
          this.cssvars.height_app_a = 0.14
          this.cssvars.height_app_ab = 0.025
          this.cssvars.height_app_ac = 0.115
          this.cssvars.height_app_b = '40%'
          this.cssvars.width_app_b = '30%'
          this.cssvars.text_size1 = "2vh"
          this.cssvars.text_size2 = "1vh"
          this.cssvars.text_size3 = "1.5vh"
          this.cssvars.text_size4 = "0.7vh"
          this.cssvars.input_size = 0.2
          this.cssvars.button_size = 0.1
          this.cssvars.padding_button = 0.125
        }
        vars.colors(this.cssvars)
        vars.setsize(this.size.mwidth,this.size.mheight)
        this.pers_containers = lib.relations_3d(this.size.mheight)
        this.render_com()
      }
    },
    mounted() {
      
      this.size = lib.size()
        if(this.size.orientation == "ancho"){
          this.cssvars.container_section_display = "flex"
          this.cssvars.sections_width = 0.94
          this.cssvars.sections_height =0.47
          this.cssvars.height_app_a = 0.28
          this.cssvars.height_app_ab = 0.05
          this.cssvars.height_app_ac = 0.23
          this.cssvars.height_app_b = '100%'
          this.cssvars.width_app_b = '40%'
          this.cssvars.text_size1 = "2vw"
          this.cssvars.text_size2 = "1vw"
          this.cssvars.text_size3 = "1.5vw"
          this.cssvars.text_size4 = "0.7vw"
          this.cssvars.input_size = 0.812
          this.cssvars.button_size = 0.05
          this.cssvars.padding_button = 0.025
        }
        if(this.size.orientation == "alto"){
          this.cssvars.container_section_display = "block"
          this.cssvars.sections_width = 0.91
          this.cssvars.sections_height =0.44
          this.cssvars.height_app_a = 0.14
          this.cssvars.height_app_ab = 0.025
          this.cssvars.height_app_ac = 0.115
          this.cssvars.height_app_b = '40%'
          this.cssvars.width_app_b = '30%'
          this.cssvars.text_size1 = "2vh"
          this.cssvars.text_size2 = "1vh"
          this.cssvars.text_size3 = "1.5vh"
          this.cssvars.text_size4 = "0.7vh"
          this.cssvars.input_size = 0.2
          this.cssvars.button_size = 0.1
          this.cssvars.padding_button = 0.125
        }
      vars.colors(this.cssvars)
      vars.setsize(this.size.mwidth,this.size.mheight)
      window.addEventListener("scroll",this.onScroll,true)
      window.addEventListener("resize",this.onResize,true)
      this.pers_containers = lib.relations_3d(this.size.mheight)
      



  }}
  
</script>

<style>
@import "./assets/styles/main.css";
</style>