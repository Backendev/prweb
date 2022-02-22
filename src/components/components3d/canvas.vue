<template lang="pug">
    #canvasc(class="f98",style="position:fixed;top:0;opacity:1")
      //- #devcanvas(style="width:20%;top:50%;position:fixed") {{ obj_scroll }} {{obj_size}}
</template>

<script>
import * as THREE from "three";

export default {
  name: "canvasc",
  data() {
    return {
      
      background: '#02172a',
      alpha: 1,
      canvas: "canvasc",
      width: "100%",
      height: window.innerHeight+"px",
      pading:0,
      ant_position: 0
    };
  },
  props:{
    obj_scroll : {type:Object,required:true},
    obj_size : {type:Object,required:true}
  },

  methods: {
    init: function() {
      let container = document.getElementById(this.canvas);
      container.style.width = this.width;
      container.style.height = this.height;
      const light = new THREE.AmbientLight( 0xffffff );
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setClearColor(this.background, this.alpha);
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
      this.scene = new THREE.Scene();
      this.camera = new THREE.OrthographicCamera(
        container.clientWidth /-50,
        container.clientWidth /50,
        container.clientHeight/50,
        container.clientHeight/-50,
        -15,
        1000
      );

      this.camera.position.z = 10;
      this.scene = new THREE.Scene();
      const material2 = new THREE.MeshStandardMaterial(
        {
          color:'#062740',
          needsUpdate:false,
          polygonOffset:false,
          wireframe:true,
          side:THREE.BackSide
          });
      const sphere = new THREE.SphereGeometry( 15, 32, 16 );
      const torus2 = new THREE.TorusGeometry( 5, 7, 4, 100 );
      //const torus = new THREE.TorusKnotGeometry( 2.5, 1, 100, 10 );
      this.mesh3 = new THREE.Mesh(sphere, material2);
      this.mesh2 = new THREE.Mesh(torus2, material2);
      this.mesh2.position.set(0,0,0)
      this.mesh2.scale.set(5,5,5)
      this.mesh3.scale.set(1.5,1.5,1.5)
      this.scene.add(light)
      // let points = []
      //       points.push( new THREE.Vector3( -1, 0, -1 ) );
      //       points.push( new THREE.Vector3( 1, 0, 1 ) );
      // const linea = new THREE.BufferGeometry().setFromPoints( points );
      // this.mesh5 = new THREE.Line( linea, material )
      // for(let i= -25;i<=25;i+=4.5){
      //   for(let j = -25; j <= 25;j+=4.5){
      //     for(let k = -25; k <= 25;k+=4.5){
      //       console.log( i)
      //       let mesh = new THREE.Line( linea, materials[Math.abs(j/3)] )
      //       mesh.rotation.x += k/2
      //       mesh.rotation.z += i/2
      //       mesh.rotation.y += j/2
      //       mesh.position.set(i,j,k)
      //       mesh.scale.set(j/10,i/20,k/30)
      //       this.earthPivot.add(mesh)
      //     }
      //   }
        
      // }
      this.scene.add(this.mesh2)
      this.scene.add(this.mesh3)
      this.ani();
    },
    ani: function() {
      let act_position = this.obj_scroll.spherepos
      let porc = (this.obj_scroll.spherepos /360) * 100
      if (act_position != this.ant_position){

        this.mesh2.rotation.x = (Math.PI*50) / porc
        this.mesh3.rotation.x = (Math.PI*50) / porc

        this.ant_position = act_position
      }
      requestAnimationFrame(this.ani);
      this.mesh2.rotation.z += 0.0005;
      this.mesh3.rotation.y += 0.001;
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    window.addEventListener("resize",this.resize_component,true)
    
    this.init();
  },
};
</script>
<style lang="css">
    @import '../.././assets/styles/components.css' 
    
</style>