import {Flags} from "./flags";
import {Position} from "./position";

export class WorldObject {
  id: number;
  position: Position;
  angle: number;
  height: number;
  health: number;
  typeId: number;
  type: string;
  flags: Flags;
  distance: number;
}
