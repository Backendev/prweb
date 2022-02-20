<template lang="pug">
    #canvasc(class="f98")
        div(style="width:20%;top:50%;position:fixed") ffff
            #devcanvas {{ obj }}
</template>

<script>
export default {
    name: "com",
    data() {
        return {
            
        };
    },
    props:{
        obj : {type:Object,required:true}
    }
}
</script>