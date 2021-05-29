import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDAComponent } from './fda.component';

describe('FDAComponent', () => {
  let component: FDAComponent;
  let fixture: ComponentFixture<FDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
