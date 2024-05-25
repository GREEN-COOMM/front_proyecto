import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLandingComponent } from './pag-landing.component';

describe('PagLandingComponent', () => {
  let component: PagLandingComponent;
  let fixture: ComponentFixture<PagLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagLandingComponent]
    });
    fixture = TestBed.createComponent(PagLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
