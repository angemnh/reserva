import { Component } from '@angular/core';
import { StatusBadgeComponent } from "../../../shared/components/status-badge/status-badge";
import { PageHeaderComponent } from "../../../core/components/page-header/page-header";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [StatusBadgeComponent, PageHeaderComponent, NgFor],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

}
