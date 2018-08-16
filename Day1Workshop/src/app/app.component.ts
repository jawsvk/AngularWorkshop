import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from './model';
import { AddressService } from './address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Day1Workshop';
  contact: Model[] = [];
  private addressSvc: AddressService;

  // constructor(private addressSvc: AddressService){}
 constructor(AddressSvc: AddressService) {
  this.addressSvc = AddressSvc;
 }

  processContact(newContact) {
    console.log('get data from form');
    console.log(newContact);
    this.addressSvc.saveAddress(newContact)
    .then(() => {
      console.log('saved');
      this.contact.push(newContact);
    });
   // this.contact.push(newContact);

  }

  //   processContact($event: Model) {
  //   // Promise - non blocking, async
  //   this.addressSvc.saveAddress($event)
  //     .then((result) => {
  //       console.log('saveAddress status: ', result);
  //       if (result.status) {
  //         this.contact.push($event);

  //       }
  //     });
  // }

  ngOnInit() {
    this.addressSvc.loadAddresses()
    .then((addresses: Model[]) => {
      this.contact = addresses;
      console.log(addresses);
    });

  }

  ngOnDestroy() {
  }

}
