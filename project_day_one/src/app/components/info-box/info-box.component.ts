import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: [ './info-box.component.scss' ],
})
export class InfoBoxComponent {
  isHidden: boolean;

  handler(event) {
    console.log(event);
  }
}
