import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../../core/components/page-header/page-header";
import { StatusBadgeComponent } from "../../../shared/components/status-badge/status-badge";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [PageHeaderComponent, StatusBadgeComponent, NgFor],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

}
