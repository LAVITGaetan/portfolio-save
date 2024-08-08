import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
closeMenu() {
  document.getElementsByClassName('menu')[0].classList.toggle('menu-displayed')
}
}
