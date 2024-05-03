import { Component, OnInit } from '@angular/core';
import { TranslateService , TranslateModule} from '@ngx-translate/core';
@Component({
  selector: 'app-ajouter-local',
  templateUrl: './ajouter-local.component.html',
  styleUrls: ['./ajouter-local.component.css']
})
export class AjouterLocalComponent implements OnInit {
  lang:string='';
  constructor(private translateService:TranslateService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'ar';
  }
  ChangeLang(Lang:any){
    const selectedLanguage = Lang.target.value;
      localStorage.setItem('lang', selectedLanguage);
      this.translateService.use(selectedLanguage);
  }
  isFiltersVisible: boolean = false;

  toggleFilters(): void {
    this.isFiltersVisible = !this.isFiltersVisible;
  }
}