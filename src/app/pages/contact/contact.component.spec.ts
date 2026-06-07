import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, RouterTestingModule, ReactiveFormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('el formulario debe ser inválido cuando está vacío', () => {
    expect(component.form.invalid).toBe(true);
  });

  it('el campo nombre debe ser requerido', () => {
    const control = component.form.get('nombre');
    control?.setValue('');
    expect(control?.invalid).toBe(true);
  });

  it('el campo email debe validar formato', () => {
    const control = component.form.get('email');
    control?.setValue('no-es-email');
    expect(control?.invalid).toBe(true);
    control?.setValue('correo@empresa.cl');
    expect(control?.valid).toBe(true);
  });

  it('el formulario debe ser válido con todos los campos requeridos correctos', () => {
    component.form.patchValue({
      nombre: 'Juan Pérez',
      email: 'juan@empresa.cl',
      telefono: '+56912345678',
      servicio: 'guardias-seguridad',
      mensaje: 'Necesito información sobre guardias de seguridad para mi empresa industrial.',
    });
    expect(component.form.valid).toBe(true);
  });

  it('submitted debe iniciar en false', () => {
    expect(component.submitted).toBe(false);
  });
});
