const lib = {
    scrolling:null
}
lib.size = function(){
    let he = window.innerHeight
    let wi = window.innerWidth
    
    let o = (wi > he) ? "ancho" : "alto"
    let s = {mwidth:wi,mheight:he,orientation:o}
    console.log(s)
    return s
}
lib.relations_3d= function(mheight){
    let dif_y_sphere =  360 / (mheight * 4)

    return dif_y_sphere
}

lib.scrolling = function(mheight,hposition_ant,pers_containers){
    let scrolly = window.top.scrollY
    let hposition = scrolly / mheight
    let rel_scroll = ""
    let section = 0
    if (hposition > hposition_ant){
        rel_scroll = "bajar"
    }else if(hposition < hposition_ant){
        rel_scroll = "subir"
    }
    
    if (hposition >= 0 & hposition < 1){
        section = 1
    }else if(hposition >= 1 & hposition < 2){
        section = 2
    }else if(hposition >= 2 & hposition < 3){
        section = 3
    }else if(hposition >= 3){
        section = 4
    }
    let spherepos = pers_containers * (scrolly+mheight)
    let sc = {
        scrolly,hposition_ant,hposition,spherepos,rel_scroll,section
    }
    console.log(sc)
    return sc

}
lib.rotContainers = function(spherepos,pers_containers,scrolly){
    console.log("111  " +spherepos)
    console.log("222   "+scrolly)
    console.log("333  "+pers_containers)
    let cal = pers_containers * scrolly
    let arriba = 3
    let abajo = 4
    let dif = 270
    let d_arriba = 0
    let d_abajo = 0
    let g_arriba = 0
    let g_abajo = 0
    if(spherepos >= 90 & spherepos < 180){
        console.log("Primero")
        dif = 90
        arriba = 1
        abajo = 2
    }
    if(spherepos >= 180 & spherepos < 270){
        console.log("Primero")
        dif = 180
        arriba = 2
        abajo = 3
    }
    if(spherepos >= 270){
        console.log("Primero")
        dif = 270
        arriba = 3
        abajo = 4
    }
    let g_med = spherepos - dif
    //g_arriba = g_med
    g_abajo = 90 - g_med
    console.log(g_med)
    //console.log("Arriba "+arriba+" "+g_arriba+"\nAbajo "+abajo+" "+g_abajo)
    //let id_c_ar = "cont"+arriba
    let id_c_ab = "cont"+abajo
    if (g_abajo < 0){
        g_abajo = 0
    }
    if (g_abajo < 30){
        g_abajo = 0
    }
    let c_c_ar = "transform-origin:center top;transform: perspective(calc(var(--widthMain))) rotateX(-"+g_abajo+"deg)"
    //let c_c_ab = "transform-origin:center bottom;transform: perspective(calc(var(--widthMain))) rotateX(-"+g_arriba+"deg)"
    //console.log(c_c_ab)
    console.log(c_c_ar)
    //document.getElementById(id_c_ar).style = c_c_ab
    document.getElementById(id_c_ab).style = c_c_ar

}
export default lib