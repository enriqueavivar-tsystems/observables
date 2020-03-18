import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContentComponentComponent } from './side-content-component.component';

describe('SideContentComponentComponent', () => {
  let component: SideContentComponentComponent;
  let fixture: ComponentFixture<SideContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideContentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
