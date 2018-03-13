import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulDataComponent } from './modul-data.component';

describe('ModulDataComponent', () => {
  let component: ModulDataComponent;
  let fixture: ComponentFixture<ModulDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
