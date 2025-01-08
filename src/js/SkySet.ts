import {
    Assets,
    Container,
    FillInput,
    Graphics,
    Point,
    TilingSprite,
    TilingSpriteOptions
} from "pixi.js";

export interface SkySetConfig {
    name: string;
    bg : string[]
    skyColor: number,
    groundColor: number,
    emphasisColor: number,
    cloudTint: number
}

export class SkySet {
    backdrops: string[] = []
    parentContainer: Container;
    sky: FillInput;
    ground: FillInput;
    width: number;
    height: number;
    cloudTint: number;

    constructor(container: Container, config:SkySetConfig, width: number, height: number) {
        this.parentContainer = container;
        this.sky = config.skyColor;
        this.ground = config.groundColor;
        this.backdrops = config.bg;
        this.width = width;
        this.height = height;
        this.cloudTint = config.cloudTint;
    }

    async build() {
        let sky = new Graphics()
            .rect(0,0, this.width, this.height)
            .fill(this.sky);

        let ground = new Graphics()
            .rect(0,500, this.width, this.height - 500)
            .fill(this.ground);



        this.parentContainer.addChild(sky);
        this.parentContainer.addChild(ground);

        for (let i = 0; i < this.backdrops.length; i++) {
            let backdrop = await this.createSprite(this.backdrops[i]);
            this.parentContainer.addChild(backdrop);
        }
    }

    async createSprite(texture:string) {
        let skyTex = await Assets.load(texture);
        skyTex.source.scaleMode = 'nearest';
        const tilingSpriteOptions: TilingSpriteOptions = {
            texture: skyTex,
            y: 500,
            width: this.parentContainer.width, // Width of the tiling sprite
            tileScale: new Point(1, 1), // Scale the texture (default is 1,1)
            tilePosition: new Point(0, 0), // Position of the texture (default is 0,0)
        };
        return new TilingSprite(tilingSpriteOptions);
    }

    destroy() {
        this.parentContainer.removeChildren();
    }

}