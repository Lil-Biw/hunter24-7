import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let compiled: HTMLElement;
  let component: NavbarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('debe renderizar el logo con el nombre de la empresa', () => {
    const logo = compiled.querySelector('.navbar-logo');
    expect(logo?.textContent).toContain('Hunter');
  });

  it('debe tener link de navegación a /contacto', () => {
    const links = Array.from(compiled.querySelectorAll('a'));
    const hasContacto = links.some(a =>
      a.getAttribute('routerLink') === '/contacto' ||
      a.getAttribute('ng-reflect-router-link') === '/contacto'
    );
    expect(hasContacto).toBe(true);
  });

  it('debe tener botón de cotizar', () => {
    expect(compiled.querySelector('.navbar-cta')).toBeTruthy();
  });

  it('isScrolled debe ser false al inicio', () => {
    expect(component.isScrolled).toBe(false);
  });

  it('toggleMenu debe cambiar isMenuOpen', () => {
    expect(component.isMenuOpen).toBe(false);
    component.toggleMenu();
    expect(component.isMenuOpen).toBe(true);
  });

  it('closeMenu debe cerrar menú y dropdown', () => {
    component.isMenuOpen = true;
    component.isDropdownOpen = true;
    component.closeMenu();
    expect(component.isMenuOpen).toBe(false);
    expect(component.isDropdownOpen).toBe(false);
  });
});
