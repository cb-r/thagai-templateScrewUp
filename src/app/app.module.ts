import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageBodyComponent } from './landing-page-body/landing-page-body.component';
import { FindOutMoreComponent } from './find-out-more/find-out-more.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageBodyComponent,
    FindOutMoreComponent,
    ContactComponent,
    EventsComponent,
    JoinComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
