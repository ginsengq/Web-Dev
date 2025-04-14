import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private api: ApiService) { }

  getCompanies(): Observable<Company[]> {
    return this.api.get('companies/').pipe(
      map((response: any) => response as Company[])
    );
  }

  getCompany(id: number): Observable<Company> {
    return this.api.get(`companies/${id}/`).pipe(
      map((response: any) => response as Company)
    );
  }

  getCompanyVacancies(id: number): Observable<any> {
    return this.api.get(`companies/${id}/vacancies/`);
  }
}