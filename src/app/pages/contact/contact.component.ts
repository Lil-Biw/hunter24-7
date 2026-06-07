import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SERVICES } from '../../core/data/services.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  services = SERVICES;
  submitted = false;
  form: FormGroup;

  // TODO: backend - load from environment config or server settings
  private readonly contactEmail = 'contacto@hunter247.cl';
  // TODO: backend - load WhatsApp number from server config
  private readonly whatsappNumber = '56XXXXXXXXX';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre:   ['', [Validators.required, Validators.minLength(3)]],
      empresa:  [''],
      rut:      [''],
      email:    ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\+?56\d{9}$/)]],
      servicio: ['', Validators.required],
      mensaje:  ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.value;
    const subject = encodeURIComponent(`Cotización Hunter 24/7 — ${v.servicio}`);
    const body = encodeURIComponent(
      `Nombre: ${v.nombre}\n` +
      `Empresa: ${v.empresa || 'No indicado'}\n` +
      `RUT: ${v.rut || 'No indicado'}\n` +
      `Email: ${v.email}\n` +
      `Teléfono: ${v.telefono}\n` +
      `Servicio de interés: ${v.servicio}\n\n` +
      `Mensaje:\n${v.mensaje}`
    );

    // TODO: backend - replace with HTTP call: this.contactService.sendForm(v).subscribe(...)
    window.location.href = `mailto:${this.contactEmail}?subject=${subject}&body=${body}`;
    this.submitted = true;
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}
