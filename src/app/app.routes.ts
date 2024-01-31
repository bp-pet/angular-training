import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentsComponent } from './students/students.component';
import { CountriesComponent } from './countries/countries.component';
import { ElectionsComponent } from './elections/elections.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "students",
        component: StudentsComponent
    },
    {
        path: "countries",
        component: CountriesComponent
    },
    {
        path: "elections",
        component: ElectionsComponent
    },
    {
        path: "cities",
        component: CitiesComponent
    },
    {
        path: "city/:id",
        component: CityComponent
    },
    {
        path: "city",
        component: CityComponent
    }
];
