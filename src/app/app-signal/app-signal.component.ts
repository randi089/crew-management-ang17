import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app-signal.component.html',
  styleUrl: './app-signal.component.scss'
})
export class AppSignalComponent {

  kode = signal('');
  colorP = signal(100);
  price = computed( () => {
   return this.kode().toLowerCase() == 'tessaja' ? this.colorP() - (this.colorP()*0.3) : this.colorP();
  });
  color = 'Black';
  value = signal(1);
  total = computed( () => { return this.price() * this.value() } );

  constructor() {
    effect( () => {
      console.log('Value: ' + this.value());
    });

    // effect( () => {
    //   console.log('Second Effect');
    //   this.value.set(100);
    // }, {allowSignalWrites: true} );
  }

  black() {
    this.color = 'Black';
    this.colorP.set(100);
  }

  brown() {
    this.color = 'Brown';
    this.colorP.set(110);
  }
  
  red() {
    this.color = 'Red';
    this.colorP.set(120);
  }

  add() {
    this.value.update(value => value + 1);
  }

  min() {
    this.value.update(value => value - 1);
  }
}
