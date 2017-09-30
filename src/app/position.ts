export class Position {
  x: number;
  y: number;
  z: number;

  constructor(position: Position) {
    this.x = position.x;
    this.y = position.y;
    this.z = 0;
  }
  public mapGameCoordToSvg(mapData) {
    const width = mapData.ur[0] - mapData.ll[0];
    const height = mapData.ur[1] - mapData.ll[1];
    let scalingFactor;
    if (width > height) {
      scalingFactor = 1024 / width;
    }else {
      scalingFactor = 1024 / height;
    }
    this.x = (this.x - mapData.ll[0]) * scalingFactor;
    this.y = ( height - (this.y - mapData.ll[1])) * scalingFactor;
  }
}
