import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../../core/data/services.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  services = SERVICES;
  currentYear = new Date().getFullYear();

  // TODO: backend - load contact info from server config
  contactInfo = {
    email: 'contacto@hunter247.cl',
    phone: '+56 X XXXX XXXX',
    whatsapp: '56XXXXXXXXX',
    address: 'Chile — Zona Centro-Sur',
  };
}
