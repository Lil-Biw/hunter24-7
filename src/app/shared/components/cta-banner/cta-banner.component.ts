import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss',
})
export class CtaBannerComponent {
  @Input() title  = '¿Necesita proteger su empresa?';
  @Input() subtitle = 'Contáctenos hoy y reciba una cotización personalizada sin costo.';
  @Input() ctaText = 'Solicitar Cotización';
  @Input() ctaLink = '/contacto';
}
