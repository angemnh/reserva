// Prueba unitaria del componente Sidebar
// Verifica que el componente se cree correctamente.

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  // Declaro las variables para el componente y su entorno de prueba
  let component: Sidebar;
  let fixture: ComponentFixture<Sidebar>;

  // Antes de cada prueba configuro el módulo de pruebas de Angular
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar] // Importo el componente a probar
    })
    .compileComponents(); // Compilo el componente

    // Creo una instancia del componente para las pruebas
    fixture = TestBed.createComponent(Sidebar);
    component = fixture.componentInstance;

    // Detecto los cambios iniciales para renderizarlo
    fixture.detectChanges();
  });

  // Prueba básica: el componente debe crearse sin errores
  it('should create', () => {
    expect(component).toBeTruthy(); // Compruebo que el componente existe
  });
});
