import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Model } from '../model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

    contact: Model;

    @ViewChild('contactForm') contactForm: NgForm;

    @Output() newContact = new EventEmitter();

  processForm() {

    // console.log('Processing form');

   //  console.log(this.contactForm.value);
    this.contact = this.contactForm.value;

    this.contactForm.resetForm();

    this.newContact.emit(this.contact);

  }


  constructor() { }

  ngOnInit() {
  }

}
