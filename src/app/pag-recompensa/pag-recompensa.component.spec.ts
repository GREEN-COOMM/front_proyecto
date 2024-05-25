import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagRecompensaComponent } from './pag-recompensa.component';

describe('PagRecompensaComponent', () => {
  let component: PagRecompensaComponent;
  let fixture: ComponentFixture<PagRecompensaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagRecompensaComponent]
    });
    fixture = TestBed.createComponent(PagRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
