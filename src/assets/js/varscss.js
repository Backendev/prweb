const vars = {}

vars.colors = function(colors,h,w){
    let cols = ""
    Object.entries(colors).forEach(([key, value]) => {
        cols += key+":"+value+";"
      });
    let variables = "html{"+cols+"}"
    document.getElementById("varscols").innerHTML = variables
    console.log(variables)
}

vars.setsize = function(w,h){
    let size = "html{--heightMain:"+h+"px;--widthMain:"+w+"px;}"
    document.getElementById("varssize").innerHTML = size
}
export default vars