import {Component, OnInit} from '@angular/core';
import {PlayerService} from "./player.service";
import {Player} from "./player";
import {Observable} from "rxjs/Rx";
import {Door} from "./door";
import {DoorService} from "./door.service";
import {Point} from "./point";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Doom Map Viewer';
  // better way to do this??
  players: Player[] = [new Player(), new Player(), new Player(), new Player()];
  doors: Door[];

  ngOnInit(): void {
    const timer = Observable.timer(2000, 1000);
    timer.subscribe(t => this.getAllObjects());
  }
  getAllObjects(): void {
    this.getPlayers();
    this.getDoors();
  }
  getPlayers(): void {
    this.playersService.getPlayers(this.setPlayers.bind(this));
  }
  getDoors(): void {
    this.doorService.getDoors(this.setDoors.bind(this));
  }
  setPlayers(players: Player[]): void {
    // These values only work for E1M1
    let i = 0;
    players.forEach(function (player) {
      this.players[i].position.x = (player.position.x + 768) *  0.223;
      this.players[i].position.y = (2826 - (player.position.y + 4864)) * 0.223 ;
      i++;
    }, this);
  }
  setDoors(doors: Door[]): void {
    this.doors = doors;
    // stupid way to call constructor for Point - somehow not called during cast from json
    this.doors.forEach(function(door){
      door.line.v1 = new Point(door.line.v1.x, door.line.v1.y);
      door.line.v2 = new Point(door.line.v2.x, door.line.v2.y);
    });
  }
  constructor ( private playersService: PlayerService,
                private doorService: DoorService) {}
}
