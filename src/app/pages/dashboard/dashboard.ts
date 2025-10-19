import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../core/components/page-header/page-header';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, StatusBadgeComponent],
 templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
