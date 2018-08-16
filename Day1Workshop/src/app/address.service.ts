import {Injectable} from '@angular/core';
import Dexie from 'dexie';

import {Model} from './model';

// should change address to contacts
// Singleton means only one copy of it
@Injectable()
export class AddressService {
  db: Dexie;

  constructor() {
    this.db = new Dexie ('friends');
    this.db.version(1).stores({
      addresses: 'Email,Name,Phone'
    });
  }

  loadAddresses(): Promise<Model[]> {
    return (this.db['addresses'].toArray());
  }

 saveAddress(address: Model): Promise<any> {
        return (
            this.db['addresses'].put(address)
                .then(() => {
                    return ({ status: true, message: 'Saved' } );
                })
                .catch((err) => {
                    return ({ status: false, message: err } );
                })
        );
      }


}
