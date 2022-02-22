<template lang="pug">
    section(:class="col",style="position:relative,overflow:hidden")
        div(id="cont4",class="f98",style="position:relative")
            div(class="f94 abs1 tarriba")
                .container_section
                    .section_c()
                        .input_console
                            .input_cont1
                                .input_cont2
                                    input(id="textfield",class="input_1",placeholder="Ingrese texto")
                                    button(class="boton1",@click="twits_api",style="width:calc(var(--widthMain)*var(--button_size));height: calc(var(--heightMain)*0.030)")
                                        |Twits
                                    button(class="boton1",@click="wiki_api",style="width:calc(var(--widthMain)*var(--button_size));height: calc(var(--heightMain)*0.030)")
                                        |Wiki                                
                                .input_cont3()
                                    div(class="displayfull",v-show="!charging") Cargando ...
                                    div(v-show="charging")
                                        div(class="input_section",v-show="opt == 'presentation'")
                                            |En esta seccion puede probar una aplicacion en 
                                            |la que cual; 
                                            br
                                            |Ingrese un texto y puede elegir dos tipos de respuesta
                                            br
                                            br
                                            |La primera llamada 'Twits' 
                                            br
                                            br
                                            |En la cual se buscara en Twitter publicaciones
                                            |que contengan el texto que usted ingreso y los mostrara en tres secciones:
                                            br
                                            br
                                            |Positivos: publicaciones que contienen texto que se puede interpretar de manera positiva
                                            br
                                            |Neutrales: publicaciones en las que su texto no se interpreta ni como positivo ni tampoco negativo
                                            br
                                            |Negativos: publicaciones que contienen texto que se puede interpretar de manera negativa 
                                            br
                                            br
                                            |Se generara una grafica con la estadistica de estas interpretaciones divididas en dos grupo:
                                            br
                                            br
                                            |Objetivas = Que tan objetivas son las interpretaciones de todas las publicaciones
                                            br
                                            |Neutrales = Publicaciones que no se interpretan ni como Objetivas ni tampoco Subjetivas
                                            br
                                            |Subjetivas = Que tan subjetivas son las interpretaciones de todas las publicaciones
                                            br
                                            br
                                            br
                                            |La segunda llamada 'Wiki'
                                            br
                                            br
                                            |En la cual la respuesta sea una busqueda de el texto ingresado
                                            |en la web de Wikipedia
                                            
                                        div(v-show="opt == 'twits'") 
                                            div(class="displayfull",v-show="!charging_twits") Trayendo datos..
                                            div(v-show="charging_twits")
                                                div(style="display:var(--container_section_display)")
                                                    div(style="height: calc(var(--heightMain)*var(--sections_height));width: calc(var(--widthMain)*var(--sections_width));")
                                                        div(style="height:calc(var(--heightMain)*var(--height_app_a));") 
                                                            div(class="text1",style="height:calc(var(--heightMain)*var(--height_app_ab));display:grid;align-items:end;text-align:center") 
                                                                |Positivos
                                                            div(style="height:calc(var(--heightMain)*var(--height_app_ac));overflow-y: scroll")
                                                                div(v-for="i in t_positivos")
                                                                    br
                                                                    |{{ i }}
                                                        div(style="height:calc(var(--heightMain)*var(--height_app_a));") 
                                                            div(class="text1",style="height:calc(var(--heightMain)*var(--height_app_ab));display:grid;align-items:end;text-align:center") 
                                                                |Neutrales
                                                            div(style="height:calc(var(--heightMain)*var(--height_app_ac));overflow-y: scroll")
                                                                div(v-for="i in t_neutrales")
                                                                    br
                                                                    |{{ i }}
                                                        div(style="height:calc(var(--heightMain)*var(--height_app_a));") 
                                                            div(class="text1",style="height:calc(var(--heightMain)*var(--height_app_ab));display:grid;align-items:end;text-align:center") 
                                                                |Negativos
                                                            div(style="height:calc(var(--heightMain)*var(--height_app_ac));overflow-y: scroll")
                                                                div(v-for="i in t_negativos",)
                                                                    br
                                                                    |{{ i }}
                                                    div(style="height: calc(var(--heightMain)*var(--sections_height));width: calc(var(--widthMain)*var(--sections_width));display:block;text-align:center")
                                                        div(style="width:100%;display: inline-block")
                                                            div(class="text1",style="width:var(--width_app_b);display: inline-block") General
                                                                pie-chart(:data="chartDataGeneral" :options="chartOptions")
                                                        div(style="width:100%;")
                                                            div(class="text1",style="width:var(--width_app_b);display: inline-block") Objetivos
                                                                pie-chart(:data="chartDataObjetive" :options="chartOptions")
                                                            div(class="text1",style="width:var(--width_app_b);display: inline-block") Subjetivos
                                                                pie-chart(style=";color:red", :data="chartDataSubjetive" :options="chartOptions")
                                        div(v-show="opt == 'wiki'")
                                            div(class="displayfull",v-show="!charging_wiki") Trayendo datos..
                                            div(style="height:calc(var(--heightMain)*0.785);padding:3%;overflow-y:scroll",v-show="charging_wiki") {{response_wiki.data}}
                                

    
</template>
<script>
import PieChart from "./../../assets/js/PieChart.js";
export default {
    components: {
        PieChart
    },
    data(){
        return {
            response:"",
            response_twits:"",
            response_wiki:"",
            charging:false,
            opt:"presentation",
            charging_wiki:false,
            charging_twits:false,
            t_positivos:[],
            t_neutrales:[],
            t_negativos:[],
            value_general_p:0,
            value_general_n:0,
            value_general_ne:0,
            value_objetivos_p:0,
            value_objetivos_n:0,
            value_objetivos_ne:0,
            value_subjetivos_p:0,
            value_subjetivos_n:0,
            value_subjetivos_ne:0,
            chartOptions: {
                hoverBorderWidth: 20,
                responsive: true,

                
            },
            chartDataGeneral: {
                hoverBorderWidth: 10,
                labels: ["Positivos", "Neutrales", "Negativos"],
                datasets: [
                {
                    label: "General",
                    backgroundColor: ["#00D4AA", "#0088AA", "#ff9966"],
                    data: [1,2,3],
                    borderColor: "#dbac68",
                }
                ]
            },
            chartDataObjetive: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: ["Positivos", "Neutrales", "Negativos"],
                datasets: [
                {
                    label: "Objetivos",
                    color:"red",
                    backgroundColor: ["#00D4AA", "#0088AA", "#ff9966"],
                    data: [5, 10, 5],
                    borderColor: "#dbac68",
                }
                ]
            },
            chartDataSubjetive: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: ["Positivos", "Neutrales", "Negativos"],
                datasets: [
                {
                    label: "Subjetivos",
                    color:"red",
                    backgroundColor: ["#00D4AA", "#0088AA", "#ff9966"],
                    data: [5, 10, 5],
                    borderColor: "#dbac68",
                }
                ]
            }
        }
        
    },
    props:{
        col:{type:String,required:true}
    },
    mounted() {
        const resp = fetch("https://backportafolioed.herokuapp.com/")
        resp.then(response => response.json())
        .then(res => {
            this.response = res
            this.charging = true
            }
            )
        .catch(err => console.error(err))
        console.log(this.response)
    },
    methods:{
        
        twits_api(){
            window.location.href = "#cont4"
            this.t_positivos=[],
            this.t_neutrales=[],
            this.t_negativos=[],
            this.opt = "twits"
            this.charging_twits = false
            let text = document.getElementById('textfield').value
            const resp_t = fetch("https://backportafolioed.herokuapp.com/twits/"+text)
            resp_t.then(response => response.json())
            .then(res => {
                this.response_twits = res
                this.charging_twits = true
                this.response_twits.forEach(item => {
                    if (item.sentimiento == "positivos"){
                        // t_positivos
                        if (item.twits.length > 0){
                            item.twits.forEach(twit =>{
                                this.t_positivos.push(twit)
                                this.value_general_p = item.valor
                                this.value_objetivos_p = item.objetivos
                                this.value_subjetivos_p = item.subjetivos
                                console.log(item.valor)
                            })
                        }
                    }
                    else if (item.sentimiento == "neutrales"){
                        // t_neutrales : []
                        if (item.twits.length > 0){
                            item.twits.forEach(twit =>{
                                this.t_neutrales.push(twit)
                                this.value_general_n = item.valor
                                this.value_objetivos_n = item.objetivos
                                this.value_subjetivos_n = item.subjetivos
                                console.log(item)
                            })
                        }
                        
                    }
                    else if (item.sentimiento == "negativos"){
                        // t_negativos : []
                        if (item.twits.length > 0){
                            item.twits.forEach(twit =>{
                                this.t_negativos.push(twit)
                                this.value_general_ne = item.valor
                                this.value_objetivos_ne = item.objetivos
                                this.value_subjetivos_ne = item.subjetivos
                                console.log(item)
                                
                            })
                        }
                    }
                    console.log(item.sentimiento)
                    })
                }
                ).then(res => {
                    this.chartDataGeneral.datasets[0].data[0] = this.value_general_p
                    this.chartDataGeneral.datasets[0].data[1] = this.value_general_n
                    this.chartDataGeneral.datasets[0].data[2] = this.value_general_ne

                    this.chartDataSubjetive.datasets[0].data[0] = this.value_subjetivos_p
                    this.chartDataSubjetive.datasets[0].data[1] = this.value_subjetivos_n
                    this.chartDataSubjetive.datasets[0].data[2] = this.value_subjetivos_ne

                    this.chartDataObjetive.datasets[0].data[0] = this.value_objetivos_p
                    this.chartDataObjetive.datasets[0].data[1] = this.value_objetivos_n
                    this.chartDataObjetive.datasets[0].data[2] = this.value_objetivos_ne
                })
            .catch(err => console.error(err))
        },
        wiki_api(){
            window.location.href = "#cont4"
            this.opt = "wiki"
            this.charging_wiki = false
            let text = document.getElementById('textfield').value
            const resp_t = fetch("https://backportafolioed.herokuapp.com/wiki/"+text)
            resp_t.then(response => response.json())
            .then(res => {
                this.response_wiki = res
                this.charging_wiki = true
                }
                )
            .catch(err => console.error(err))
        }
    }
}
</script>
<style lang="css">
    .input_console{
        width: 100%;

    }
    .input_cont3{
        width:calc(var(--widthMain)*0.95);
        height: calc(var(--heightMain)*0.95);
    }
    .input_cont2{
        padding-top: calc(var(--heightMain)*0.05);
        padding-left: calc(var(--heightMain)*var(--padding_button));
        width:calc(var(--widthMain)*0.95);
        height: calc(var(--heightMain)*0.030);
        display:flex;
    }
    .input_cont3{
        margin-top: calc(var(--heightMain)*0.01);
        width:calc(var(--widthMain)*0.95);
        height: calc(var(--heightMain)*0.835);
    }
    .input_1{
        color:var(--colorComplementario);
        width:calc(var(--widthMain)*var(--input_size));
        height: calc(var(--heightMain)*0.025);
        background-color: var(--color1);
        border: 1px  inset;
        border-radius: 1rem 0% 0% 1rem;
        padding-left: 1% ;
        border: 2px var(--colorComplementario) solid ;
        outline:none;
    }
    .input_section{
        display:grid;
        text-align: center;
        align-items: center;
        height: calc(var(--heightMain)*0.835);
    }
    .boton1{
        background-color: var(--color1);
        color:var(--colorComplementario);
        border: 1px var(--colorComplementario) solid;
        border-radius: 5%;
    }
    .boton1:hover{
        background-color: var(--colorComplementario);
        color:var(--color1);
        border: 1px var(--colorComplementario) solid;
        border-radius: 5%;
    }
    .displayfull{
        width:calc(var(--widthMain)*0.95);
        height: calc(var(--heightMain)*0.95);
        display:grid;
        text-align: center;
        align-items: center;
    }
</style>