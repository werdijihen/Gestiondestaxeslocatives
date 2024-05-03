import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PropritaireComponent } from './propritaire/propritaire.component'; 
import { LocauxComponent } from './locaux/locaux.component';
import { AjouterLocalComponent } from './locaux/ajouter-local/ajouter-local.component';
import { AjouterproprietaireComponent } from './propritaire/ajouterproprietaire/ajouterproprietaire.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'propritaire', component: PropritaireComponent },
  { path: 'propritaire/ajouterProprietaire', component: AjouterproprietaireComponent },
  { path: 'locaux', component: LocauxComponent },
  { path: 'locaux/ajouterLocal', component: AjouterLocalComponent },
  { path: 'user/management', component: UserComponent, canActivate: [AuthenticationGuard] },
  { path: 'dashboard', component: DashboardComponent }, // Configure the route for the dashboard component
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard if no path specified
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
