import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  onMouseMove(event: MouseEvent) {

  }
  showContact() {
    document.getElementsByClassName('menu')[0].classList.toggle("menu-displayed")
  }  
}
