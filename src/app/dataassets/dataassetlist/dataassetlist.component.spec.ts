import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataassetlistComponent } from './dataassetlist.component';

describe('DataassetlistComponent', () => {
  let component: DataassetlistComponent;
  let fixture: ComponentFixture<DataassetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataassetlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataassetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
