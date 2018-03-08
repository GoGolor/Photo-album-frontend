import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { MainModule } from './main/main.module';
import { JournalModule } from './journal/journal.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    TranslateModule.forRoot(),
    AuthModule,
    ServicesModule,
    MainModule,
    JournalModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
