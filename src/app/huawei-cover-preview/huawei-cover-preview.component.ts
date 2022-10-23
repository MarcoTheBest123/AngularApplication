import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh, MeshStandardMaterial, Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-huawei-cover-preview',
  templateUrl: './huawei-cover-preview.component.html',
  styleUrls: ['./huawei-cover-preview.component.scss']
})
export class HuaweiCoverPreviewComponent implements OnInit {

  @Input()
  set color(value: string) {
    this.#color = value;
    this.applyColorToMaterial(value);
  }

  #color = '';

  cupMaterial: MeshStandardMaterial | undefined;

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}

  cup$ = this.gltfLoaderService.load('assets/huaweiCover.glb');

  cupLoaded(object: Object3D) {
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material;
    this.applyColorToMaterial(this.#color);
  }

  ngOnInit() {

  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 10;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 0.5;
    camera.position.setY(4);
  }

  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
    }
  }
}
