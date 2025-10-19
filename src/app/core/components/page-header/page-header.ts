import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.html'
})
export class PageHeaderComponent {
  @Input() titulo = '';
  @Input() subtitulo = '';
}


