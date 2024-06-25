import { Component } from '@angular/core';
import { CrewDesignationsComponent } from '../crew-designations/crew-designations.component';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [
    CrewDesignationsComponent
  ],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {

  messageForComponent: string = "From Parent";
  userToken: string = "asd8w32hj3";
  receivedMessage: string = "";

  receingMessage(message: string): void {
    this.receivedMessage = message;
  }
  tes1: boolean = false;
  tes() {
    this.tes1 = true;
  }
}