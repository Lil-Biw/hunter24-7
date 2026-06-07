import { Component } from '@angular/core';
import { SERVICES } from '../../../../core/data/services.data';
import { ServiceCardComponent } from '../../../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services-overview.component.html',
  styleUrl: './services-overview.component.scss',
})
export class ServicesOverviewComponent {
  services = SERVICES;
}
