import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pos = [0, 0];
  keyPressed: string = '';

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    this.keyPressed = event.key;
    switch (event.key) {
      case 'ArrowRight':
        this.move_right();
        break;
      case 'ArrowLeft':
        this.move_left();
        break;
      case 'ArrowUp':
        this.move_up();
        break;
      case 'ArrowDown':
        this.move_down();
        break;
    }
  }

  move_right() {
    this.pos[1] += 1;
  }

  move_left() {
    this.pos[1] -= 1;
  }

  move_up() {
    this.pos[0] -= 1;
  }

  move_down() {
    this.pos[0] += 1;
  }
}
