import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsAddFormComponent } from './product-details-add-form.component';

describe('ProductDetailsAddFormComponent', () => {
  let component: ProductDetailsAddFormComponent;
  let fixture: ComponentFixture<ProductDetailsAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
