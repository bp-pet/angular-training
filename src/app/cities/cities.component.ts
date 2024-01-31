import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';
import { City } from '../city';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {

  constructor(private svc: CitiesService) { }

  cities: City[] = [];

  intervalId: any = null;

  ngOnInit() {
    this.svc.getCities().subscribe((data: City[]) => {this.cities = data});
    this.intervalId = setInterval(() => this.svc.getCities().subscribe((data: City[]) => {this.cities = data}), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
