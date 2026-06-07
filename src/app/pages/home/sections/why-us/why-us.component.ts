import { Component } from '@angular/core';

interface Reason {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
  reasons: Reason[] = [
    {
      icon: '🛡️',
      title: 'Personal Certificado OS-10',
      desc: 'Todos nuestros guardias son acreditados y supervisados por el organismo regulador de seguridad privada en Chile.',
    },
    {
      icon: '📡',
      title: 'Tecnología de Vanguardia',
      desc: 'Drones, IA, cámaras 4K y central de monitoreo 24/7 para la máxima cobertura de su instalación.',
    },
    {
      icon: '⚡',
      title: 'Respuesta Inmediata',
      desc: 'Protocolos de respuesta coordinados con carabineros y equipos de reacción rápida en terreno.',
    },
    {
      icon: '📊',
      title: 'Reportes Digitales',
      desc: 'Control de rondas GPS en tiempo real y reportes digitales en línea para total transparencia.',
    },
  ];
}
