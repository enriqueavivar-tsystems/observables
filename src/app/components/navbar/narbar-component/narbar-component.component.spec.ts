import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarbarComponentComponent } from './narbar-component.component';

describe('NarbarComponentComponent', () => {
  let component: NarbarComponentComponent;
  let fixture: ComponentFixture<NarbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
