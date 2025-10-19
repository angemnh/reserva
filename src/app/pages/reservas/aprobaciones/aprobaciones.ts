import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../../core/components/page-header/page-header";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-aprobaciones',
  imports: [PageHeaderComponent, NgFor],
  templateUrl: './aprobaciones.html',
  styleUrl: './aprobaciones.css'
})
export class Aprobaciones {

}
