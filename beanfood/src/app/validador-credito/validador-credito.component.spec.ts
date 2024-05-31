import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadorCreditoComponent } from './validador-credito.component';

describe('ValidadorCreditoComponent', () => {
  let component: ValidadorCreditoComponent;
  let fixture: ComponentFixture<ValidadorCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidadorCreditoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidadorCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
