<template lang="pug">
    footer(id="mfooter")
        section(style="display:flex;width:100%")
            a(style="width:30%;text-align:center")
                div(class="img2 img_linkedin")
                div(style="width:80%")
                    |LinkedIn
            a(style="width:30%;text-align:center")
                div(class="img2 img_github")
                div
                    |Github 1
            a(style="width:30%;text-align:center")
                div(class="img2 img_github")
                div
                    |Github 2

    
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