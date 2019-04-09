import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { ErrorHandlerService } from './shared/services/error-handler.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    InternalServerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EnvironmentUrlService, ErrorHandlerService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
