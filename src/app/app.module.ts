import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthenticationGuard } from './guard/authentication.guard';
import { NotificationModule } from './notification.module';
import { NotificationService } from './service/notification.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavbarComponent } from './navbar/navbar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './profile/profile.component';
import { PropritaireComponent } from './propritaire/propritaire.component';
import { LocauxComponent } from './locaux/locaux.component';
import { AjouterLocalComponent } from './locaux/ajouter-local/ajouter-local.component';
import { AjouterproprietaireComponent } from './propritaire/ajouterproprietaire/ajouterproprietaire.component';
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
const material =[
  MatPaginatorModule,
  MatTableDataSource 
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    DashboardComponent,
    NavbarComponent,
    NavbarComponent,
    ProfileComponent,
    PropritaireComponent,
    LocauxComponent,
    AjouterLocalComponent,
    AjouterproprietaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotificationModule,
    MatPaginatorModule,
    MatTableModule,
    TranslateModule.forRoot(
      {
        loader:{
          provide:TranslateLoader,
          useFactory:HttpLoaderFactory,
          deps:[HttpClient]
        }
      }
    )
  ],
  providers: [NotificationService, AuthenticationGuard, AuthenticationService, UserService,HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
