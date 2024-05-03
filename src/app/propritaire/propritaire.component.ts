import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propritaire',
  templateUrl: './propritaire.component.html',
  styleUrls: ['./propritaire.component.css']
})
export class PropritaireComponent implements OnInit {
  isFiltersVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilters(): void {
    this.isFiltersVisible = !this.isFiltersVisible;
  }

}
