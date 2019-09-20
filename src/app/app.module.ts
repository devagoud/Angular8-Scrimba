import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomesComponent } from './customes/customes.component';
import { CustomerslistComponent } from './customes/customerslist/customerslist.component';
import {FilterTextboxComponent} from './customes/customerslist/filter-textbox.component';
import {CustomPipe} from './customes/CustomPipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CustomesComponent,
    CustomerslistComponent,
    FilterTextboxComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
