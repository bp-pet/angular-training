import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  names: string[] = [];
  enteredName = "";
  @ViewChild('nameInput') nameInput! : ElementRef;

  ngOnInit() {
    this.names = localStorage["students"] ? JSON.parse(localStorage["students"]) : [];
  }

  addName() {
    if (this.enteredName.trim() == "") {
      return;
    }
    this.names.push(this.enteredName);
    localStorage["students"] = JSON.stringify(this.names);
    this.enteredName = "";
    this.nameInput.nativeElement.focus();
  }

  clearNames() {
    this.names = [];
    localStorage["students"] = JSON.stringify(this.names);
  }

  removeStudent(name: string) {
    this.names = this.names.filter(n => n != name);
    localStorage["students"] = JSON.stringify(this.names);
  }
}
