import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMesssageComponent } from './error-messsage.component';

describe('ErrorMesssageComponent', () => {
  let component: ErrorMesssageComponent;
  let fixture: ComponentFixture<ErrorMesssageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMesssageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMesssageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
