import { IAmAlive } from './base/iamalive';
import { Mesh, BoxGeometry, MeshBasicMaterial, Object3D, OrthographicCamera, Group, Vector3, PerspectiveCamera, Camera } from 'three';

export class Organism implements IAmAlive {
    private shape: Group;
    public eye: Camera;

    public get Shape(): Group {
        return this.shape;
    }

    constructor() {
        const geometry = new BoxGeometry( 1, 1, 1 );
        const material = new MeshBasicMaterial( { color: 0xfafafa } );
        const shape = new Mesh( geometry, material );

        console.log(shape.position);

        this.eye = new PerspectiveCamera(
            75, 2.46, 0.1, 1000
        );
        this.eye.position.set(0, 1.5, 0);
        console.log(this.eye.position);
        // this.eye.lookAt(shape.position);

        this.shape = new Group
        this.shape.add(shape);
        this.shape.add(this.eye);
    }

    getEyes() {
        return this.eye;
    }

    update() {
        this.shape.rotation.y += 0.01;
    }
}