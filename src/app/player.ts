import {Flags} from "./flags";
import {Keycards} from "./keycards";
import {Position} from "./position";

export class Player {
id: number;
position: Position;
angle: number;
height: number;
health: number;
typeId: number;
type: string;
flags: Flags;
armor: number;
kills: number;
items: number;
secrets: number;
weapon: number;
keyCards: Keycards;
cheatFlags: any;
isConsolePlayer: boolean;
}
