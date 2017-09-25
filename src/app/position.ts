export class Position {
  x: number;
  y: number;
  z: number;

  constructor(position: Position) {
    this.x = position.x;
    this.y = position.y;
    this.z = 0;
    this.mapGameCoordToSvg();
  }
  private mapGameCoordToSvg() {
    this.x = (this.x + 768) * 0.223;
    this.y = (2826 - (this.y + 4864)) * 0.223;
  }
}
