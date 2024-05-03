import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterproprietaireComponent } from './ajouterproprietaire.component';

describe('AjouterproprietaireComponent', () => {
  let component: AjouterproprietaireComponent;
  let fixture: ComponentFixture<AjouterproprietaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterproprietaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterproprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
