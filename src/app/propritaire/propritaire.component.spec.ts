import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropritaireComponent } from './propritaire.component';

describe('PropritaireComponent', () => {
  let component: PropritaireComponent;
  let fixture: ComponentFixture<PropritaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropritaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropritaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
