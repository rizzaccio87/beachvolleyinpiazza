import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  template: 'BVIP application'
})
export class AppComponent {
  constructor(private router: Router) {}
}