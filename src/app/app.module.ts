import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicModule } from './modules/music/music.module';
import { InterpretDetailComponent } from './modules/music/interpret-detail/interpret-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpretDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MusicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
