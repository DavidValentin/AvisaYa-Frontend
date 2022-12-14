import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormComponent } from './components/form/form.component';
import { FileComponent } from './components/file/file.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
    FileComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SecurityRoutingModule],
})
export class SecurityModule {}
