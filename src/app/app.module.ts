import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PlayerService} from "./player.service";
import {DoorService} from "./door.service";
import {WorldObjectsService} from "./world-objects.service";
import {WorldService} from "./world.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlayerService,
    DoorService,
    WorldObjectsService,
    WorldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
