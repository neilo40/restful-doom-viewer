import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Door} from "./door";

@Injectable()
export class DoorService {
  private doorsUrl = 'http://localhost:6001/api/world/doors';
  constructor(private http: HttpClient) { }
  getDoors(callback: (s: Door[]) => any) {
    this.http.get<Door[]>(`${this.doorsUrl}`)
      .subscribe(response => {
        callback(response);
      });
  }
}
