import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Monitoreo } from '../models/monitoreo.model';


@Injectable({
  providedIn: 'root'
})
export class MonitoreoSService {

  private dbPath = '/monitoreo/last';

  monitoreoRef: AngularFireList<Monitoreo>;

  constructor(private db: AngularFireDatabase) {
    this.monitoreoRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Monitoreo> {
    return this.monitoreoRef;
  }

  create(tutorial: Monitoreo): any {
    return this.monitoreoRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.monitoreoRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.monitoreoRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.monitoreoRef.remove();
  }
}
