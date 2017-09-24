import {Component, OnInit} from '@angular/core';
import {PlayerService} from "./player.service";
import {Player} from "./player";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Doom Map Viewer';
  players: Player[] = [new Player(), new Player(), new Player(), new Player()];

  ngOnInit(): void {
    const timer = Observable.timer(2000, 1000);
    timer.subscribe(t => this.getPlayers());
  }
  getPlayers(): void {
    this.playersService.getPlayers(this.setPlayers.bind(this));
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
  constructor ( private playersService: PlayerService) {}
}
