import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBookToBuyComponent } from './selected-book-to-buy.component';

describe('SelectedBookToBuyComponent', () => {
  let component: SelectedBookToBuyComponent;
  let fixture: ComponentFixture<SelectedBookToBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedBookToBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedBookToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
