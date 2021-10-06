import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarComponent } from './shared/components/bar/bar.component';
import { EmployeeModule } from './features/employees/employee.module'

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    EmployeeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
