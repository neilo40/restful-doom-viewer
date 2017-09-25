import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PlayerService} from "./player.service";
import {DoorService} from "./door.service";
import {WorldObjectsService} from "./world-objects.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PlayerService,
    DoorService,
    WorldObjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
