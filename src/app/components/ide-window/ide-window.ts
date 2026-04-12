import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ide-window',
  imports: [CommonModule],
  templateUrl: './ide-window.html',
  styleUrl: './ide-window.scss',
})
export class IdeWindow {

  lines = Array.from({ length: 20 }, (_, i) => i);

 
openModal() {
  alert('CV modal');
}
}
