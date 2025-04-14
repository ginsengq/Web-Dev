import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Vacancy } from '../models/vacancy.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  constructor(private api: ApiService) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.api.get('vacancies/').pipe(
      map((response: any) => response as Vacancy[])
    );
  }

  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.api.get('vacancies/top_ten/').pipe(
      map((response: any) => response as Vacancy[])
    );
  }
}