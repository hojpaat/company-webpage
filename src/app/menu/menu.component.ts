import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  activeMenu: string = '';
  isHomePage: boolean = true;
  isServiceActive: boolean = false;
  isGalleryActive: boolean = false;
  isContactActive: boolean = false;

  ngOnInit(){
  }

  updateActiveMenu(s: string) {
    switch(s) {
      case "services":
        this.isServiceActive = true;
        this.isContactActive = false;
        this.isGalleryActive = false;
        break;
      case "gallery":
        this.isServiceActive = false;
        this.isContactActive = false;
        this.isGalleryActive = true;
        break;
      case "contact":
        this.isServiceActive = false;
        this.isContactActive = true;
        this.isGalleryActive = false;
        break;
    }
    this.isHomePage = false;
  }

}
