import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Monitoreo } from '../models/monitoreo.model';


@Injectable({
  providedIn: 'root'
})
export class AlarmMonitorService {

  private dbPath = '/monitoreo/last';
  monitoreoRef!: AngularFireList<Monitoreo>;

   constructor(private db: AngularFireDatabase) { }

   /**
    * GET ALL nodes as list
    * @returns
    */
   getAll(): AngularFireList<Monitoreo> {
    return this.monitoreoRef;
  }

   /**
     * Get All tickers from firebase
     */
    getMessages(): Observable<any> {
      this.monitoreoRef = this.db.list(this.dbPath);
      return this.monitoreoRef.valueChanges();
    }
}
