<template lang="pug">
    section(:class="col",style="position:relative,overflow:hidden")
        div(id="cont3",class="f98",style="position:relative")
            div(class="f94 abs1 tarriba")
                .container_section
                    .section_a
                        div
                            div(class="text1")
                                |Trabajos Realizados:
                            br
                            br
                            div(id="trabajos" style="z-index:88;position:relative;height: 10%")
                                div(style="display:grid;align-items:start;padding:2%")
                                    div(class="text3")
                                        |Hospital San Ignacio
                                    div(style="display:grid;align-items:end;padding:2%")
                                        div Tecnico de Soporte TI
                                        div Bogota
                                div(style="display:grid;align-items:start;padding:2%")
                                    div(class="text3")
                                        |Risk Posibble
                                    div(style="display:grid;align-items:end;padding:2%")
                                        div Data Enginer &amp; Software Developer
                                        div Miami, Florida (remoto)
                                div(style="display:grid;align-items:start;padding:2%")
                                    div(class="text3")
                                        |Biznaga Media
                                    div(style="display:grid;align-items:end;padding:2%")
                                        div Software Developer
                                        div Fort Lauderdale, Florida (remoto)
                                div
                                div
                                div
                                div(style="display:grid;align-items:start;padding:2%")
                                    div(class="text3")
                                        |Tulpep
                                    div(style="display:grid;align-items:end;padding:2%")
                                        div Software Developer
                                        div Bogota (remoto)
                                div(style="display:grid;align-items:start;padding:2%")
                                    div(class="text3")
                                        |Symplifica
                                    div(style="display:grid;align-items:end;padding:2%")
                                        div Web Developer
                                        div Bogota (remoto)
                                div(style="display:grid;align-items:start;padding:2%")
                                    div(class="text3")
                                        |Stradata
                                    div(style="display:grid;align-items:end;padding:2%")
                                        div Software Developer &amp; Data Analitic
                                        div Medellin (remoto)
                    .section_b 
                        div
                            div(class="text1")
                                | Proyectos Personales
                            br
                            br
                            br
                            div(id="proyectos" style="z-index:88;position:relative;height: 10%;overflow-y: overlay;")
                                div(style="display:grid;align-items:start;padding:2%")
                                    a(class="text3",href="https://colab.research.google.com/drive/12cT7DJaHu13vvtjV8A57oObheXRLPank",target="__blank")
                                        div
                                            |Proyecto Decifrar Alfabeto
                                    div(style="display:grid;align-items:end;padding:2%") 
                                        |Decifrar palabras y verbos y preposiciones en un Alfabeto 'Diferente'
                                
                                div(style="display:grid;align-items:start;padding:2%")
                                    a(class="text3",href="https://github.com/muluk-code/codes/tree/master/proyecto_Dorean",target="__blank")
                                        div
                                            |Proyecto Dorean
                                    div(style="display:grid;align-items:end;padding:2%") 
                                        |Proyecto guia para Paqueteria de SO familia Debian
                                div
                                div
                                div(style="display:grid;align-items:start;padding:2%")
                                    a(class="text3",href="https://colab.research.google.com/drive/1T-ym4onI8Ae9zz_XWkccCzo9LNM9xpQh",target="__blank")
                                        div
                                            |Proyecto Consulta BTC
                                    div(style="display:grid;align-items:end;padding:2%") 
                                        |Consulta de eth_btc y ltc_btc
                                div(style="display:grid;align-items:start;padding:2%")
                                    a(class="text3",href="https://colab.research.google.com/drive/1ls_qLQ3Xyb_yo1jDI7KsVOYjKJvnHOgz?usp=sharing",target="__blank")
                                        div
                                            |Proyectos Estadistica
                                    div(style="display:grid;align-items:end;padding:2%") 
                                        |Proyectos con diferentes metodos estadisticos
</template>
<script>
export default {
    props:{
        col:{type:String,required:true}
    },
}
</script>
