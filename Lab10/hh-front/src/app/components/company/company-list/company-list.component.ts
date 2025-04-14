import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../models/company.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  isLoading = true;

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe({
      next: (companies: Company[]) => {
        this.companies = companies;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error loading companies:', err);
        this.isLoading = false;
      }
    });
  }

  viewCompany(id: number): void {
    this.router.navigate(['/companies', id]);
  }
}