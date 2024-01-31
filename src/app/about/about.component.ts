import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  author_name = "Br";
  original_author_age = 21;
  author_age = this.original_author_age;

  birthday() {
    this.author_age = this.author_age + 1;
    this.author_name += "r";
  }

  reset_age() {
    this.author_age = this.original_author_age;
  }

}
