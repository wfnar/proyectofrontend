import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartDetailPageComponent } from './shopping-cart-detail-page.component';

describe('ShoppingCartDetailPageComponent', () => {
  let component: ShoppingCartDetailPageComponent;
  let fixture: ComponentFixture<ShoppingCartDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
