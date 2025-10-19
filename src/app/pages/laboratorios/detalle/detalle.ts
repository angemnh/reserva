import { Component } from '@angular/core';
import { StatusBadgeComponent } from "../../../shared/components/status-badge/status-badge";
import { PageHeaderComponent } from "../../../core/components/page-header/page-header";

@Component({
  selector: 'app-detalle',
  imports: [StatusBadgeComponent, PageHeaderComponent],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle {

}
