import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EnumerationComponent } from './enumeration/enumeration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'enums', component: EnumerationComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'lock', component: LockComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'parametre', component: ParametreComponent},
  {path: '**', component: NotFound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
