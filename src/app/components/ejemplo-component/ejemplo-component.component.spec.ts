import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploComponentComponent } from './ejemplo-component.component';

describe('EjemploComponentComponent', () => {
  let component: EjemploComponentComponent;
  let fixture: ComponentFixture<EjemploComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
