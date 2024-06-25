import { Component, Injector, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  counter = signal(0);

  username = signal('');

  users = signal([
    'Randi',
    'Febriadi'
  ]);

  videos = signal({
    title: 'Youtube Signal Video',
    description: 'Awesome Angular Signal Tutorial'
  });

  setCounter() {
    this.counter.set(30);
    this.counterEffect();
  }

  updateCounter() {
    this.counter.update(counter => counter + 50);
  }

  setVideos() {
    this.videos.set({
      'title' : 'New Title',
      'description' : 'New Description'
    });
  }

  // constructor() {
  //   effect(()=>{
  //     console.log('Value of counter ' + this.counter());
  //     console.log('Value of counter ' + this.videos().title);
  //   });
  // }

  constructor(private injector: Injector){}

  counterEffect(): void {
    effect(()=>{
      console.log('Value of counter ' + this.counter());
      console.log('Value of counter ' + this.videos().title);
    }, { injector: this.injector });
  }

}
