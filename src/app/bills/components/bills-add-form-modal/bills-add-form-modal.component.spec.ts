import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsAddFormModalComponent } from './bills-add-form-modal.component';

describe('BillsAddFormModalComponent', () => {
  let component: BillsAddFormModalComponent;
  let fixture: ComponentFixture<BillsAddFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsAddFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsAddFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
