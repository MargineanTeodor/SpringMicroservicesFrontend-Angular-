import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListdevicesComponent } from './pages/listdevices/listdevices.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddDeviceComponent } from './pages/add-device/add-device.component';
import { ModPasswordComponent } from './pages/mod-password/mod-password.component';
import { ListDeviceNormalComponent } from './pages/list-device-normal/list-device-normal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ListdevicesComponent,
    RegisterComponent,
    AddDeviceComponent,
    ModPasswordComponent,
    ListDeviceNormalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
