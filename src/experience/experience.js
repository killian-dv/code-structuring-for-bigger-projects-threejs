import Sizes from "./utils/sizes.js";
import Time from "./utils/time.js";
import * as THREE from "three";

export default class Experience {
  constructor(canvas) {
    // Options
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();

    // Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    // Time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    // console.log("resize");
  }

  update() {
    // console.log("update");
  }
}
