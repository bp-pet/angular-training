import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  url = "https://xanderwemmers.nl/api/cities/"

  getCities() {
    return this.http.get<City[]>(this.url);
  }

  getCity(id: number) {
    return this.http.get<City>(this.url + id);
  }

  editCity(city: City) {
    return this.http.put(this.url + city.CityID, city);
  }

  addCity(city: City) {
    return this.http.post(this.url, city);
  }

  deleteCity(city: City) {
    return this.http.delete(this.url + city.CityID);
  }
}
