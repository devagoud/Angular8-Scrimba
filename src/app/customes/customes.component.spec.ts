import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomesComponent } from './customes.component';

describe('CustomesComponent', () => {
  let component: CustomesComponent;
  let fixture: ComponentFixture<CustomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
