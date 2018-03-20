import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulChartsComponent } from './modul-charts.component';

describe('ModulChartsComponent', () => {
  let component: ModulChartsComponent;
  let fixture: ComponentFixture<ModulChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
