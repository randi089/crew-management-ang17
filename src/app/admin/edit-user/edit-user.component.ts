import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {

  adminName: string = 'Randi';

  anchorUrl: string = 'http://google.com';

  disabled: boolean = false;

  imageUrl: string = 'https://lh3.googleusercontent.com/LoLVzdJdA30GbWyhXj6R4_OLdY6gCti1gYRWXBdNvuAJ5-s98S94DEXeReK1C9nGwCQpQPEodpHTiEASg5rf8YtdwxW2P-09gfeD5cgA1YMHSkrNX1M';

  className: string = 'c1';

  buttonClicked() {
    this.className = this.className === 'c1'? 'c2' : 'c1';
    this.disabled = !this.disabled;
  }

  captureValue(event: any) {
    console.log(event.key)
  }

  onMouseOver(event: any) {
    this.className = this.className === 'c1'? 'c2' : 'c1';
  }

  onMouseOut(event: any) {
    this.className = this.className === 'c2'? 'c1' : 'c2';
  }

}
