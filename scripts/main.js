import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 

const orbit = new OrbitControls(camera, renderer.domElement); 

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const planeGeometry = new THREE.PlaneGeometry();
const planeMaterial = new THREE.MeshStandardMaterial({color: 0x00FF00});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial( {color: 0x00F00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
directionalLight.position.set(5, 5, 5);
directionalLight.angle = Math.PI / 6;
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

camera.position.set(0, 2, 5);
orbit.update();

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

animate(); 
