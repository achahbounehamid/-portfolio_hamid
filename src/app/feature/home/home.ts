import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HOME_PAGE_DATA } from './home.data';
import { HomePageData } from './home.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  data: HomePageData = HOME_PAGE_DATA;

  get lineNumbers(): number[] {
    return Array.from({ length: 60 }, (_, i) => i + 1);
  }

  getTagClass(type?: string): string {
    switch (type) {
      case 'blue':
        return 'ptag blue';
      case 'green':
        return 'ptag green';
      case 'amber':
        return 'ptag amber';
      default:
        return 'ptag';
    }
  }
}
