import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }