<template lang="pug">
  section(:class="col")
    | header
    
</template>
<script>
export default {
    props:{
        col:{type:String,required:true}
    },
}
</script>