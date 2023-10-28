import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataassetdetailsComponent } from './dataassetdetails.component';

describe('DataassetdetailsComponent', () => {
  let component: DataassetdetailsComponent;
  let fixture: ComponentFixture<DataassetdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataassetdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataassetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
