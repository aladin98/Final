import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { FDTComponent } from './fdt/fdt.component';
import { FDAComponent } from './fda/fda.component';
import { CreationComponent } from './creation/creation.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'home-component', component: HomeComponent},
  { path: 'contact-component',component:ContactComponent },
  { path: 'navbar-component',component:NavbarComponent },
  { path: 'profil-component',component:ProfilComponent},
  { path: 'login-component',component:LoginComponent },
  { path: 'fdt-component',component:FDTComponent },
  { path: 'fda-component',component:FDAComponent },
  { path: 'creation-component',component:CreationComponent },
  { path: 'modifier-component',component:ModifierComponent },
  { path: 'app-component',component:AppComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
