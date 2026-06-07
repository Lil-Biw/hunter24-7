import { SERVICES, getServiceBySlug } from './services.data';
import { IService } from '../models/service.model';

describe('services.data', () => {
  it('debe exportar un array con al menos 6 servicios', () => {
    expect(SERVICES.length).toBeGreaterThanOrEqual(6);
  });

  it('cada servicio debe tener todos los campos requeridos del modelo', () => {
    SERVICES.forEach((service: IService) => {
      expect(service.slug).toBeTruthy();
      expect(service.name).toBeTruthy();
      expect(service.shortDesc).toBeTruthy();
      expect(service.fullDesc).toBeTruthy();
      expect(service.icon).toBeTruthy();
      expect(service.heroImage).toBeTruthy();
      expect(Array.isArray(service.features)).toBe(true);
      expect(service.features.length).toBeGreaterThan(0);
      expect(service.cta).toBeTruthy();
    });
  });

  it('los slugs deben ser únicos', () => {
    const slugs = SERVICES.map(s => s.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('los slugs deben contener solo minúsculas y guiones', () => {
    SERVICES.forEach(s => {
      expect(s.slug).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it('getServiceBySlug debe encontrar un servicio existente', () => {
    const service = getServiceBySlug('guardias-seguridad');
    expect(service).toBeTruthy();
    expect(service?.slug).toBe('guardias-seguridad');
  });

  it('getServiceBySlug debe retornar undefined para slug inexistente', () => {
    expect(getServiceBySlug('no-existe')).toBeUndefined();
  });
});
