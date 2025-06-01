import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]', //will always use this component when using the existing tag button with attribute [appButton]
  //selector: '[appButton]', //will always use this component when using the a tag with attribute [appButton]
  //selector: 'button.appButton', //will always use this component when using the existing tag button with class .appButton
  //selector: '.appButton', //will always use this component when using the a tag with class .appButton
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
