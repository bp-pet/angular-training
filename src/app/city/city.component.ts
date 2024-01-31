import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitiesService } from '../cities.service';
import { City } from '../city';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  
  id = 0;
  current: City | null = null;

  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private svc: CitiesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id != undefined) {
      this.svc.getCity(this.id).subscribe(data => this.current = data);
    } else {
      this.id = 0
      this.current = new City();
    }
  }

  save() {
    this.svc.editCity(this.current!).subscribe(
      {
        next: _ => this.router.navigateByUrl('/cities'),
        error: err => this.errorMessage = err.error
      });
  }

  delete() {
    this.svc.deleteCity(this.current!).subscribe(
      {
        next: _ => this.router.navigateByUrl('/cities'),
        error: err => this.errorMessage = err.error
      });
  }

  addCity() {
    this.svc.addCity(this.current!).subscribe(
      {
        next: _ => this.router.navigateByUrl('/cities'),
        error: err => this.errorMessage = err.error
      });
  }

  backToOverview() {
    this.router.navigateByUrl('/cities')
  }
}
