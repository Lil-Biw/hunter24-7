import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceDetailComponent } from './service-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('ServiceDetailComponent', () => {
  let fixture: ComponentFixture<ServiceDetailComponent>;
  let component: ServiceDetailComponent;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailComponent, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ slug: 'guardias-seguridad' }),
            snapshot: { paramMap: convertToParamMap({ slug: 'guardias-seguridad' }) },
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('debe cargar el servicio desde el slug de la ruta', () => {
    expect(component.service).toBeTruthy();
    expect(component.service?.slug).toBe('guardias-seguridad');
  });

  it('debe renderizar el nombre del servicio', () => {
    const name = compiled.querySelector('.service-name');
    expect(name?.textContent).toContain('Guardias de Seguridad');
  });

  it('debe mostrar al menos una característica', () => {
    expect(compiled.querySelector('.feature-item')).toBeTruthy();
  });

  it('debe mostrar el CTA del servicio', () => {
    expect(compiled.querySelector('app-cta-banner')).toBeTruthy();
  });
});
