import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  isSmall = false;
  router: Router = inject(Router);

  ngOnInit(){
    this.updateIsSmall();
  }

  updateIsSmall() {
    this.isSmall = !(this.router.url == "/home" || this.router.url == "/");
  }

}
