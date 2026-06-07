import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  // TODO: backend - load images from API when CMS or admin panel is integrated
  images: { src: string; alt: string }[] = [
    { src: 'assets/images/gallery/gallery-1.jpg', alt: 'Central de monitoreo Hunter 24/7' },
    { src: 'assets/images/gallery/gallery-2.jpg', alt: 'Guardia de seguridad en terreno' },
    { src: 'assets/images/gallery/gallery-3.jpg', alt: 'Cámara de seguridad instalada' },
    { src: 'assets/images/gallery/gallery-4.jpg', alt: 'Drone de vigilancia perimetral' },
    { src: 'assets/images/gallery/gallery-5.jpg', alt: 'Equipo Hunter 24/7 operativo' },
    { src: 'assets/images/gallery/gallery-6.jpg', alt: 'Sistema de alarmas instalado' },
  ];
}
