import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart } from '@angular/router';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(UserComponent) userComponent: UserComponent;
  showNavbar: boolean = true;
  lang:string='';
  isSidebarOpen = true;
  isArabic: boolean = false; 

  constructor (private translateService:TranslateService,private router: Router ){ 
    this.translateService.setDefaultLang('ar');
    this.translateService.use(localStorage.getItem('lang') || 'ar')
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Hide navbar on login page
        this.showNavbar = !event.url.includes('login');
      }
    });
  }
  ChangeLang(Lang:any){
    const selectedLanguage = Lang.target.value;
      localStorage.setItem('lang', selectedLanguage);
      this.translateService.use(selectedLanguage);
  }
 // Par défaut, la langue est non-arabe

  // Méthode pour changer la langue
  changeLanguage(language: string) {
    // Change la position de la sidebar si la langue est arabe
    this.isArabic = (language === 'ar');
  }
  isSidebarExpanded: boolean = false;

  onSidebarHover(isHovering: boolean) {
    this.isSidebarExpanded = isHovering;
  }
  }

