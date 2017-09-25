export class Point {
  x: number;
  y: number;
  constructor(the_x: number, the_y: number) {
    // map a point from the api into the svg space
    this.x = (the_x + 768) * 0.223;
    this.y = (2826 - (the_y + 4864)) * 0.223;
  }
}

