import { Component } from '@angular/core';

@Component({
  selector: 'app-create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['./create-popup.component.scss']
})
export class CreatePopupComponent {
  show: boolean = false;
  showPassword: boolean = false;

  openPopUp() {
    this.show = true;
  }

  closePopUp() {
    this.show = false;
  }

  closeOverlay(e: any) {
    if (e.target.classList.contains('overlay')) {
      this.show = false
    }
  }

  //for show and hide password

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

}
