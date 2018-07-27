import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumDetailsComponent } from './num-details.component';

describe('NumDetailsComponent', () => {
  let component: NumDetailsComponent;
  let fixture: ComponentFixture<NumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
