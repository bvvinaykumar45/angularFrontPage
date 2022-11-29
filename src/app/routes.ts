import { Routes } from '@angular/router';
import { ApitestComponent } from './apitest/apitest.component';
import { DataDisplayComponent } from './data-display.component';
import { EditInfoComponent } from './edit-info.component';
import { InputInfoComponent } from './input-info.component';
import { LoginComponent } from './login.component';

export const appRoutes:Routes = [
  {path:'login', component:LoginComponent},
  {path:'data-display', component:DataDisplayComponent},
  {path:'input-info', component:InputInfoComponent},
  {path:'edit-info/:id', component:EditInfoComponent},
  {path:'app/app-apitest', component:ApitestComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'}
]