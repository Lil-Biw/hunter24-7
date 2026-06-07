import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesOverviewComponent } from './sections/services-overview/services-overview.component';
import { WhyUsComponent } from './sections/why-us/why-us.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { ContactCtaComponent } from './sections/contact-cta/contact-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesOverviewComponent,
    WhyUsComponent,
    GalleryComponent,
    ContactCtaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
