import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {

  isActive = false;

  backgroundColor = 'lightgreen';
  fontSize = '32';

  name = '';

  toogleActive() {
    this.isActive = !this.isActive;
  }

  updateStyle() {
    this.backgroundColor = 'lightyellow';
    this.fontSize = '40';
  }

}
