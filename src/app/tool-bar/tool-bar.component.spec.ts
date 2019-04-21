import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarComponent } from './tool-bar.component';

// Este módulo serve para testar o componente Tool-bar
describe('ToolBarComponent', () => {
  let component: ToolBarComponent;
  let fixture: ComponentFixture<ToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBarComponent ]
    })
    .compileComponents(); // Compilao template e seu CSS
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarComponent);
    component = fixture.componentInstance; // Testa o componente diretamente
    fixture.detectChanges(); //
  });

  // TESTE 1 - Componente criado com sucesso;
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
