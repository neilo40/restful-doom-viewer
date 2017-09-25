import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {WorldObject} from "./world-object";

@Injectable()
export class WorldObjectsService {
  private worldObjectsUrl = 'http://localhost:6001/api/world/objects';
  constructor(private http: HttpClient) { }
  getWorldObjects(callback: (s: WorldObject[]) => any) {
    this.http.get<WorldObject[]>(`${this.worldObjectsUrl}`)
      .subscribe(response => {
        callback(response);
      });
  }
}
