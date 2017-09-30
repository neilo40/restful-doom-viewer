export class World {
  episode: number;
  map: number;
  lights: string;
  svgFilename: string;
  constructor(episode: number, map: number, lights: string) {
    this.episode = episode;
    this.map = map;
    this.lights = lights;
    this.svgFilename = "/assets/E" + this.episode + "M" + this.map + ".svg#map";
  }
}
