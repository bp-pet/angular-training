import { Component } from '@angular/core';
import { Party } from '../party';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './elections.component.html',
  styleUrl: './elections.component.css'
})
export class ElectionsComponent {

  input_url = "https://xanderwemmers.nl/api/verkiezingen"
  
  parties: Party[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Party[]>(this.input_url).subscribe(data => {
      this.parties = data;
    });
  }

  deselectAll() {
    this.parties.forEach(party => party.isSelected = false);
  }

  get totalSeats() {
    return this.parties.map(party => party.Zetels).reduce((a, b) => a + b, 0);
  }

  get coalition() {
    return this.parties.filter(party => party.isSelected);
  }

  get coalitionSeats() {
    return this.coalition.map(party => party.Zetels).reduce((a, b) => a + b, 0);
  }

  get isMajority() {
    return this.coalitionSeats > this.totalSeats / 2;
  }

}
