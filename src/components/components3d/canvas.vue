<template lang="pug">
    #canvas(class="f98")
</template>

<script>
import * as THREE from "three";

export default {
  name: "HelloWorld",
  data() {
    return {
      background: 0x0080ff,
      alpha: 0,
      canvas: "canvas",
      width: "100%",
      height: window.innerHeight+"px",
      pading:0
    };
  },
  methods: {

    init: function() {
      let container = document.getElementById(this.canvas);
      container.style.width = this.width;
      container.style.height = this.height;
      const light = new THREE.AmbientLight( 0x404040 );
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setClearColor(this.background, this.alpha);
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
      this.scene = new THREE.Scene();
      //console.log(container.clientWidth / container.clientHeight);
      this.camera = new THREE.OrthographicCamera(
        container.clientWidth /-50,
        container.clientWidth /50,
        container.clientHeight/50,
        container.clientHeight/-50,
        -20,
        1000
      );

      this.camera.position.z = 10;

      this.scene = new THREE.Scene();
      // const bola = new PinaCollada('../assets/models/bola',1)
      //const loader = new ColladaLoader();
      const geometry = new THREE.IcosahedronGeometry(1,1);
      const material = new THREE.MeshNormalMaterial({wireframe: true});
      const material2 = new THREE.MeshNormalMaterial({wireframe: true});
      const torus = new THREE.TorusKnotGeometry( 2.5, 2, 100, 20 );

      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh.position.set(0,0,10)
      this.mesh.scale.set(10,10,10)
      this.mesh2 = new THREE.Mesh(torus, material2);
      this.mesh2.position.set(0,0,10)
      this.mesh2.scale.set(1,1,1)
      //this.scene.add(this.mesh);
      //this.scene.add(this.mesh2);
      this.scene.add(light)
      this.earthPivot = new THREE.Object3D();
      this.earthPivot.position.set(0,0,0)
      // const points = [];
      // points.push( new THREE.Vector3( -1, 0, 0 ) );
      // points.push( new THREE.Vector3( 1, 0, 0 ) );
  

      // const linea = new THREE.BufferGeometry().setFromPoints( points );
      // this.mesh4 = new THREE.Line( linea, material )
      // this.scene.add(this.mesh4)
      const materiala = new THREE.MeshBasicMaterial({color:0x992222})
      const materialb = new THREE.MeshBasicMaterial({color:0x444444})
      const materialc = new THREE.MeshBasicMaterial({color:0x666666})
      const materiald = new THREE.MeshBasicMaterial({color:0x888888})
      const materiale = new THREE.MeshBasicMaterial({color:0xaaaaaa})
      let materials = [materiala,materialb,materialc,materiald,materiale]
      let points = []
            points.push( new THREE.Vector3( -1, 0, -1 ) );
            points.push( new THREE.Vector3( 1, 0, 1 ) );
      const linea = new THREE.BufferGeometry().setFromPoints( points );
      this.mesh5 = new THREE.Line( linea, material )
      for(let i= -15;i<=15;i+=3){
        for(let j = -15; j <= 15;j+=3){
          for(let k = -15; k <= 15;k+=3){
            console.log( i)
            let mesh = new THREE.Line( linea, materials[Math.abs(k/3)] )
            mesh.rotation.x += k
            mesh.rotation.z += i
            mesh.rotation.y += j
            mesh.position.set(i,j,k)
            mesh.scale.set(i/2,j/3,k/5)
            this.earthPivot.add(mesh)
          }
        }
        
      }
      const geometry2 = new THREE.BoxGeometry(0.5,0.5,0.5);
      //geometry2.applyMatrix(new THREE.Matrix3().makeTranslation(15, 0, 0));
      this.mesh3 = new THREE.Mesh(geometry2,material2);
      this.mesh3.position.set(0,-15,-5)
      this.mesh3.scale.set(1,1,1)
      this.earthPivot.add( this.mesh3 );
      this.earthPivot.rotation.y = Math.PI / 2
      this.earthPivot.rotation.z = Math.PI / 2
      this.scene.add(this.earthPivot)
      

      //this.loadOBJ()
      //this.loadOBJ2()
      //this.loadGLTF()








      this.ani();
    },
    ani: function() {
      // console.log("estoy ejecutandome");
      requestAnimationFrame(this.ani);
      this.mesh.rotation.z += 0.01;
      //this.mesh2.rotation.z += 0.01;
      this.mesh.rotation.x += 0.02;
      this.mesh.rotation.z += 0.03;
      this.mesh2.rotation.x += 0.03;
      this.mesh2.rotation.z += 0.03;
      //this.earthPivot.rotation.x += 0.03
      //this.earthPivot.rotation.z += 0.03
      //this.earthPivot.rotation.z += 0.03
      //this.earthPivot.rotation.y += 0.03
      //this.mesh4.rotation.y += 0.03;
      //this.mesh3.rotation.z += 0.03;
      //this.mesh3.rotation.y += 0.03;
      this.mesh5.rotation.x += 0.03
      this.mesh5.rotation.z += 0.03
      //this.mesh5.rotation.y += 0.03
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="css">
    @import '../.././assets/styles/components.css' 
    
</style>