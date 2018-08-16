import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../model';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {


@Input()
contacts: Model[] = [];

deleteContact(i: number) {
 // console.log('> delete this number', i);
 this.contacts.splice(i, 1);

}


}
