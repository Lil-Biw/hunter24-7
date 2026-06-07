import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('debe renderizar la sección hero', () => {
    expect(compiled.querySelector('app-hero')).toBeTruthy();
  });

  it('debe renderizar la sección de servicios', () => {
    expect(compiled.querySelector('app-services-overview')).toBeTruthy();
  });

  it('debe renderizar la sección por qué elegirnos', () => {
    expect(compiled.querySelector('app-why-us')).toBeTruthy();
  });

  it('debe renderizar la galería', () => {
    expect(compiled.querySelector('app-gallery')).toBeTruthy();
  });

  it('debe renderizar el CTA de contacto', () => {
    expect(compiled.querySelector('app-contact-cta')).toBeTruthy();
  });
});
