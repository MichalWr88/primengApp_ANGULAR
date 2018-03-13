import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulFormsComponent } from './modul-forms.component';

describe('ModulFormsComponent', () => {
  let component: ModulFormsComponent;
  let fixture: ComponentFixture<ModulFormsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ModulFormsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
