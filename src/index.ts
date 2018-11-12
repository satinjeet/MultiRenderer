import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { Organism } from "./objects/organism";
import { Wall } from './objects/Wall';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / (window.innerHeight / 2), 0.1, 1000);

const thirdPerson = new WebGLRenderer();
const firstPerson = new WebGLRenderer();

thirdPerson.setSize(window.innerWidth, window.innerHeight / 2);
firstPerson.setSize(window.innerWidth, window.innerHeight / 2);

document.body.appendChild( thirdPerson.domElement );
document.body.appendChild( firstPerson.domElement );

const cube = new Organism();
const wall = new Wall();

scene.add( cube.Shape );
scene.add( wall.Shape );

camera.position.z = 16;
camera.position.y = 2;

console.log(camera.position);

function animate() {
	requestAnimationFrame( animate );
    cube.update()
    thirdPerson.render( scene, camera );
    firstPerson.render( scene, cube.getEyes() );
}
animate();