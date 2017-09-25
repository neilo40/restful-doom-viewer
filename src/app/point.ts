export class Point {
  x: number;
  y: number;

  constructor(point: Point) {
    this.x = point.x;
    this.y = point.y;
    this.mapGameCoordToSvg();
  }
  private mapGameCoordToSvg() {
    this.x = (this.x + 768) * 0.223;
    this.y = (2826 - (this.y + 4864)) * 0.223;
  }
}

