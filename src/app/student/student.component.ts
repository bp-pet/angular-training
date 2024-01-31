import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() firstName: string = '';
  @Output() OnStudentRemove = new EventEmitter<string>();

  points = 0;

  addPoint() {
    this.points++;
  }

  removePoint() {
    this.points--;
  }

  removeStudent() {
    this.OnStudentRemove.emit(this.firstName);
  }
}
