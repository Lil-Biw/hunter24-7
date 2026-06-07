import { Component } from '@angular/core';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [CtaBannerComponent],
  template: `
    <app-cta-banner
      title="¿Necesita proteger su empresa?"
      subtitle="Solicite una cotización personalizada sin costo. Respondemos en menos de 24 horas."
      ctaText="Solicitar Cotización Gratis"
    />
  `,
})
export class ContactCtaComponent {}
