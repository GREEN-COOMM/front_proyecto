import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagServicioComponent } from './pag-servicio.component';

describe('PagServicioComponent', () => {
  let component: PagServicioComponent;
  let fixture: ComponentFixture<PagServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagServicioComponent]
    });
    fixture = TestBed.createComponent(PagServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
