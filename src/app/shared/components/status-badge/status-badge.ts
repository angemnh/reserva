import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
   templateUrl: './status-badge.html',
   styleUrl: './status-badge.css'
})
export class StatusBadgeComponent {
  @Input() estado: string = 'PENDIENTE';
  badgeClass() {
    const e = (this.estado || '').toUpperCase();
    if (['APROBADA','DISPONIBLE'].includes(e)) return 'badge bg-success';
    if (['PENDIENTE'].includes(e)) return 'badge bg-warning text-dark';
    if (['RECHAZADA','CANCELADA','OCUPADO','MANTENIMIENTO'].includes(e)) return 'badge bg-danger';
    return 'badge bg-info';
  }
}
