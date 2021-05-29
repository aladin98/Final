import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDTComponent } from './fdt.component';

describe('FDTComponent', () => {
  let component: FDTComponent;
  let fixture: ComponentFixture<FDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
