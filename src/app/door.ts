import {Line} from "./line";

export class Door {
  id: number;
  specialType: number;
  state: string;
  keyRequired: string;
  distance: number;
  line: Line;
}
