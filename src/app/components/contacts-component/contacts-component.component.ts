import { Component } from '@angular/core';
import { socialMediaButtons } from '../../constants';


@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.scss']
})
export class ContactsComponent {

  public socialMediaButtons: Array<object> = socialMediaButtons;

  constructor() { }

}
