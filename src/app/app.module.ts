import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { LoginComponent } from './login.component';
import { HelloComponent } from './hello.component';
import { InputInfoComponent } from './input-info.component';
import { DataDisplayComponent } from './data-display.component';
import { EditInfoComponent } from './edit-info.component';
import { DataHolderService } from './data-holder.service';
import { appRoutes } from './routes';
import { ApitestComponent } from './apitest/apitest.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule , RouterModule.forRoot(appRoutes),HttpClientModule],

  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HelloComponent,
    InputInfoComponent,
    DataDisplayComponent,
    EditInfoComponent,
    ApitestComponent
  ],
  providers: [DataHolderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
