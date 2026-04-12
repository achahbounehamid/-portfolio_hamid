import { Component } from '@angular/core';
import { IdeWindow } from '../../components/ide-window/ide-window';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IdeWindow],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
