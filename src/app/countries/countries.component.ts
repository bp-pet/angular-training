import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from '../country';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {

  
  countries: Country[] = [];
  searchText = '';
  sortAsc = true;
  
  get filteredCountries() {
    return this.countries.filter((country: any) => country.name.common.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  
  // Dependency Injection
  // The object is injected into the constructor
  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.http.get<Country[]>('https://restcountries.com/v3.1/all').subscribe(data => this.countries = data);
  }

  sortByPopulation() {
    if (this.sortAsc) {
      this.countries.sort((a, b) => b.population - a.population);
    } else {
      this.countries.sort((a, b) => a.population - b.population);
    }
    this.sortAsc = !this.sortAsc;
  }

  sortByArea() {
    if (this.sortAsc) {
      this.countries.sort((a, b) => b.area - a.area);
    } else {
      this.countries.sort((a, b) => a.area - b.area);
    }
    this.sortAsc = !this.sortAsc;
  }

  sortByName() {
    if (this.sortAsc) {
      this.countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else {
      this.countries.sort((a, b) => b.name.common.localeCompare(a.name.common));
    }
    this.sortAsc = !this.sortAsc;
  }

  sortByCapital() {
    if (this.sortAsc) {
      this.countries.sort((a, b) => a.capital?.[0].localeCompare(b.capital?.[0]));
    } else {
      this.countries.sort((a, b) => b.capital?.[0].localeCompare(a.capital?.[0]));
    }
    this.sortAsc = !this.sortAsc;
  }
}
