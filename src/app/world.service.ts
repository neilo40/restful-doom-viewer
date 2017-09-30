import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {World} from "./world";

@Injectable()
export class WorldService {
  public map_metadata;
  private worldUrl = 'http://localhost:6001/api/world';
  constructor(private http: HttpClient) { }
  getWorld(callback: (s: World) => any) {
    this.http.get<World>(`${this.worldUrl}`)
      .subscribe(response => {
        callback(response);
      });
  }
  getMapMetadata() {
    this.http.get("/assets/metadata.json")
      .subscribe((success) => {
      this.map_metadata = success;
      });
  }
}
