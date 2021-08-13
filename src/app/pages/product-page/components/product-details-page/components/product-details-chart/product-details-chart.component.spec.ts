import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsChartComponent } from './product-details-chart.component';

describe('ProductDetailsChartComponent', () => {
  let component: ProductDetailsChartComponent;
  let fixture: ComponentFixture<ProductDetailsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
