<template lang="pug">
  section(:class="col")
    | footer
    
</template>
<script>
export default {
    props:{
        col:{type:String,required:true}
    },
}
</script>