import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.scss'
})
export class StructuralComponent {
  a = 10;
  b = 5;

  items = [10, 20, 30, 40, 50];

  userRole = 'admin';
}
