import * as PIXI from "pixi.js";
import {config} from "../../config";

export  default class Modal extends PIXI.Container {
    protected  isVisible = false;

    constructor() {
        super();
        this.visible = this.isVisible;
        this.interactive = this.isVisible;
        this.position.set(config.modalPosition.x, config.modalPosition.y);
        this.width = 200;
        this.height = 200;
        this.zIndex = 1000;
    }

    triggerModal(){
        this.isVisible = !this.isVisible;
        this.visible = this.isVisible;

        setTimeout(()=>{
            this.hideEverything();
        },1000)

    }
    hideEverything(){
            this.isVisible = !this.isVisible;
            this.visible = this.isVisible;
    }

}
