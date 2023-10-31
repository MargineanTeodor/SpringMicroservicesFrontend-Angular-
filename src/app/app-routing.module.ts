import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListdevicesComponent } from './pages/listdevices/listdevices.component';
import { AddDeviceComponent } from './pages/add-device/add-device.component';
import { ModPasswordComponent } from './pages/mod-password/mod-password.component';
import { ListDeviceNormalComponent } from './pages/list-device-normal/list-device-normal.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin/:token",component:AdminComponent},
  {path:"listDevices/:id/:token",component:ListdevicesComponent},
  {path:"addDevice/:id/:token",component:AddDeviceComponent},
  {path:"modifyPassword/:id/:token",component:ModPasswordComponent},
  {path:"listDeviceNormal/:id/:token",component:ListDeviceNormalComponent},
  {path:'', redirectTo: 'login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
