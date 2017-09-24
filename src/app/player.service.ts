import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Player} from "./player";

@Injectable()
export class PlayerService {
  private playersUrl = 'http://localhost:6001/api/players';
  constructor(private http: HttpClient) { }
  getPlayers(callback: (s: Player[]) => any) {
    this.http.get<Player[]>(`${this.playersUrl}`)
      .subscribe(response => {
        callback(response);
      });
  }
}
