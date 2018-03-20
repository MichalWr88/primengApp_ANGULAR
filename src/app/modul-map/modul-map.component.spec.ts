import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulMapComponent } from './modul-map.component';

describe('ModulMapComponent', () => {
  let component: ModulMapComponent;
  let fixture: ComponentFixture<ModulMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
