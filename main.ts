import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.connect();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(15, 32, 16);
const textureLoader = new THREE.TextureLoader();
const map = textureLoader.load("earth.jpg");
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: false,
  map: map,
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 55;

function animate() {
  // sphere.rotation.x += 0.001;
  sphere.rotation.y += 0.001;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
