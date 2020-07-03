import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SafePipeModule } from 'safe-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
