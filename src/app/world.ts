export class World {
  episode: number;
  map: number;
  lights: string;
  svgFilename: string;
  mapName: string;
  constructor(episode: number, map: number, lights: string) {
    this.episode = episode;
    this.map = map;
    this.lights = lights;
    this.mapName = "E" + this.episode + "M" + this.map;
    this.svgFilename = "/assets/" + this.mapName + ".svg#map";
  }
}
