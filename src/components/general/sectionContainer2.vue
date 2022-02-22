<template lang="pug">
    section(:class="col",style="position:relative,overflow:hidden")
        div(id="cont2",class="f98",style="position:relative")
            div(class="f94 abs1 tarriba")
                .container_section
                    .section_a
                        div
                            div(class="text1")
                                |Habilidades
                            br
                            br
                            div
                                |Extraccion, tratamiento y carga de Datos
                                br
                                |Analisis estadistico Predictivo y Descriptivo de Datos
                                br
                                |Desarrollo de Aplicaciones Web y Microservicios
                                br
                                |Integracion y Automatizacion de procesos
                                br
                                |Manejo de Bases de Datos Relacionales y No Relacionales
                                br
                    .section_b
                        div(id="habilidadesb" class="text4" style="align-items: center;width:100%;")
                            div(class="img_contenedor img_python")
                                |Python
                            div(class="img_contenedor img_php")
                                |PHP
                            div(class="img_contenedor img_ruby")
                                |Ruby
                            div(class="img_contenedor img_csharp")
                                |C #
                            div(class="img_contenedor img_javascript")
                                |Javascript
                            div(class="img_contenedor img_node")
                                |Node Js
                            div(class="img_contenedor img_linux")
                                |Linux
                            div(class="img_contenedor img_sql")
                                |My Sql
                            div(class="img_contenedor img_postgres")
                                |PostgreSQL
                            div(class="img_contenedor img_docker")
                                |Docker
                            div(class="img_contenedor img_git")
                                |Git
                            div(class="img_contenedor img_mongo")
                                |Mongo DB
                            
    
</template>
<script>
export default {
  props: {
    col: { type: String, required: true },
  },
};
</script>
<style lang="css">
    
    .img_python{
        background-image:url('./../../assets/images/python.png')
    }
    .img_php{
        background-image:url('./../../assets/images/php.png')
    }
    .img_ruby{
        background-image:url('./../../assets/images/ruby.png')
    }
    .img_csharp{
        background-image:url('./../../assets/images/csharp.png')
    }
    .img_javascript{
        background-image:url('./../../assets/images/javascript.png')
    }
    .img_node{
        background-image:url('./../../assets/images/node.png')
    }
    .img_linux{
        background-image:url('./../../assets/images/linux.png')
    }
    .img_sql{
        background-image:url('./../../assets/images/mysql.png')
    }
    .img_postgres{
        background-image:url('./../../assets/images/postgresql.png')
    }
    .img_docker{
        background-image:url('./../../assets/images/docker.png')
    }
    .img_git{
        background-image:url('./../../assets/images/git.png')
    }
    .img_mongo{
        background-image:url('./../../assets/images/mongodb.png')
    }
</style>