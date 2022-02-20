<template lang="pug">
    section(:class="col",style="position:relative,overflow:hidden")
        div(id="cont1",class="f98",style="position:relative")
            div(class="f94 abs1 tarriba")
                .container_section
                    .section_a
                        div
                            div(class="text1")
                                |Edward Camilo Gonzalez
                            br
                            br
                            div
                                |Desarrollador Web Backend

                    .section_b
                        div
                            div(class="text1")
                                |Contacto:
                            br
                            div
                                |backender.dev@gmail.com
                            br
                            br
                            br
                            br
                            div(class="text1")
                                |Proyectos
                            br
                            br
                            div
                                a(href="https://github.com/muluk-code/codes")
                                    |Github con algunos codigos
                                br
                                br
                                a(href="https://github.com/Backendev/codigos")
                                    |Github con mas codigos
                                br
                                br
                                a(href="https://colab.research.google.com/drive/1ls_qLQ3Xyb_yo1jDI7KsVOYjKJvnHOgz?usp=sharing")
                                    |Notebook con mas Codigos
                    .footer_section
                        div
                            a(href="#cont2")
                                |+ Sobre mi

</template>
<script>
export default {
    props:{
        col:{type:String,required:true}
    },
}
</script>