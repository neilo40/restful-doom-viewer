import {Component, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {PlayerService} from "./player.service";
import {Player} from "./player";
import {Observable} from "rxjs/Rx";
import {Door} from "./door";
import {DoorService} from "./door.service";
import {WorldObject} from "./world-object";
import {WorldObjectsService} from "./world-objects.service";
import {Point} from "./point";
import {Position} from "./position";
import {WorldService} from "./world.service";
import {World} from "./world";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Doom Map Viewer';
  players: Player[];
  doors: Door[];
  worldObjects: WorldObject[];
  world: World;

  ngOnInit(): void {
    const timer = Observable.timer(2000, 1000);
    timer.subscribe(t => this.getAllObjects());
  }
  getAllObjects(): void {
    this.getWorld();
    this.getPlayers();
    this.getDoors();
    this.getWorldObjects();
  }
  getPlayers(): void {
    this.playersService.getPlayers(this.setPlayers.bind(this));
  }
  getDoors(): void {
    this.doorService.getDoors(this.setDoors.bind(this));
  }
  getWorldObjects(): void {
    this.worldObjectsService.getWorldObjects(this.setWorldObjects.bind(this));
  }
  getWorld(): void {
    this.worldService.getWorld(this.setWorld.bind(this));
  }
  setPlayers(players: Player[]): void {
    this.players = players;
    for (const player of this.players) {
      player.position = new Position(player.position);
    }
  }
  setDoors(doors: Door[]): void {
    this.doors = doors;
    // would be great to do this during json -> object cast
    for (const door of this.doors) {
      door.line.v1 = new Point(door.line.v1);
      door.line.v2 = new Point(door.line.v2);
    }
  }
  setWorldObjects(worldObjects: WorldObject[]): void {
    this.worldObjects = worldObjects;
    for (const obj of this.worldObjects) {
      obj.position = new Position(obj.position);
    }
  }
  setWorld(world: World): void {
    this.world = new World(world.episode, world.map, world.lights);
  }
  constructor ( private playersService: PlayerService,
                private doorService: DoorService,
                private worldObjectsService: WorldObjectsService,
                private worldService: WorldService) {}
}
