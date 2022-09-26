import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IreturnComponent } from './ireturn/ireturn.component';
import { LoginComponent } from './login/login.component';
import { TaiwanDatePipe } from './ireturn/taiwan-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IreturnComponent,
    LoginComponent,
    TaiwanDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
