import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleMenu(){
    const menuElement = this.el.nativeElement.querySelector("#menu");
    menuElement.classList.toggle("active");
  }
}
