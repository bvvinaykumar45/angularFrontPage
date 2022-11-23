import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputInfoComponent } from './input-info.component';
import { DataDisplayComponent } from './data-display.component';

import { DataHolderService } from './data-holder.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InputInfoComponent, DataDisplayComponent ],
  providers : [ DataHolderService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
