import { Routes } from '@angular/router';
import { CompanyListComponent } from './components/company/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company/company-detail/company-detail.component';
import { VacancyListComponent } from './components/vacancy/vacancy-list/vacancy-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: '**', redirectTo: 'companies' }
];