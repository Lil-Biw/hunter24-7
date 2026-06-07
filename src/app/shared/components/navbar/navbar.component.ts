import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `<nav style="height:70px;background:#1A1A1A;position:fixed;top:0;left:0;right:0;z-index:1000;display:flex;align-items:center;padding:0 32px;color:white;font-weight:800;font-size:1.2rem;">Hunter <span style="color:#FF6D00;margin-left:4px">24/7</span></nav>`,
})
export class NavbarComponent {}
