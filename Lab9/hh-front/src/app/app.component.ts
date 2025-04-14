import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 вот он!
import { CompanyListComponent } from './components/company/company-list/company-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,             
    CompanyListComponent   
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';
}
