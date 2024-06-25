import { Component, input, output, model } from '@angular/core';

@Component({
  selector: 'app-crew-designations',
  standalone: true,
  imports: [],
  templateUrl: './crew-designations.component.html',
  styleUrl: './crew-designations.component.scss'
})
export class CrewDesignationsComponent {
  message = model(false);
  token = input<string>();
  messageEvent = output<string>();

  sendMessage() {
    this.messageEvent.emit("Hello from Child to Parent");
  }

  cancel(){
    this.message.set(false);
  }
}
