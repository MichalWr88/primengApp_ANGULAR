import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulHomeComponent } from './modul-home.component';

describe('ModulHomeComponent', () => {
  let component: ModulHomeComponent;
  let fixture: ComponentFixture<ModulHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
