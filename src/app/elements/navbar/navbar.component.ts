import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  swapTheme() {
    document.body.classList.toggle("light")
    document.getElementById("dark")?.classList.toggle("hidden")
    document.getElementById("light")?.classList.toggle("hidden")
  }
}
