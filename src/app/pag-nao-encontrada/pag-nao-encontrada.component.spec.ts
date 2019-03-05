import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagNaoEncontradaComponent } from './pag-nao-encontrada.component';

describe('PagNaoEncontradaComponent', () => {
  let component: PagNaoEncontradaComponent;
  let fixture: ComponentFixture<PagNaoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagNaoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
