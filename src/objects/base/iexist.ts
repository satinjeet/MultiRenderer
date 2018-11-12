import { Object3D, Group } from 'three';

export interface IExist {
    readonly Shape: Object3D | Group;
    update: () => void;
}