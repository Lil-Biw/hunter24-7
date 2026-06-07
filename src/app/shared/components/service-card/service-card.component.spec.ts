import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCardComponent } from './service-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IService } from '../../../core/models/service.model';

describe('ServiceCardComponent', () => {
  let fixture: ComponentFixture<ServiceCardComponent>;
  let compiled: HTMLElement;

  const mockService: IService = {
    slug: 'test-service',
    name: 'Test Service',
    shortDesc: 'Short description for testing',
    fullDesc: 'Full description',
    icon: 'test-icon',
    heroImage: 'test.jpg',
    features: ['Feature 1'],
    cta: 'Test CTA',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCardComponent, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ServiceCardComponent);
    fixture.componentInstance.service = mockService;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('debe renderizar el nombre del servicio', () => {
    expect(compiled.querySelector('.card-name')?.textContent?.trim()).toBe('Test Service');
  });

  it('debe renderizar la descripción corta', () => {
    expect(compiled.querySelector('.card-desc')?.textContent).toContain('Short description for testing');
  });

  it('debe tener un link que apunte al slug del servicio', () => {
    const links = Array.from(compiled.querySelectorAll('a'));
    const hasSlug = links.some(a =>
      (a.getAttribute('ng-reflect-router-link') || '').includes('test-service') ||
      (a.getAttribute('href') || '').includes('test-service')
    );
    expect(hasSlug).toBe(true);
  });
});
