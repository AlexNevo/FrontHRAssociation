import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarComponent } from './shared/components/bar/bar.component';
import { EmployeeModule } from './features/employees/employee.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component'
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    EmployeeModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
