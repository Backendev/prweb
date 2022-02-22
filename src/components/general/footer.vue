<template lang="pug">
    footer(id="mfooter")
        section(style="display:flex;width:100%;padding-left:5%")
            a(style="width:30%;text-align:center", href="https://github.com/muluk-code/codes",target="__blank") Github1
            a(style="width:30%;text-align:center",href="https://www.linkedin.com/in/edward-gonzalez-60730771",target="__blank") Linkedin
            a(style="width:30%;text-align:center",href="https://github.com/Backendev/codigos",target="__blank") Github2

    
</template>
<script>
export default {

}
</script>
<style>
    .t_footer{
        width: calc(var(--widthMain) * 0.2);
        height: calc(var(--heightMain) * 0.05);
    }
    .img_github{
        background-image:url('./../../assets/images/github.png')
    }
    .img_linkedin{
        background-image:url('./../../assets/images/linkedin.png')
    }
</style>