import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Historic } from '../models/historic.model';


@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  private dbPath = '/historic';

  historicRef: AngularFireList<Historic>;

  constructor(private db: AngularFireDatabase) {
    this.historicRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Historic> {
    return this.historicRef;
  }

  create(tutorial: Historic): any {
    return this.historicRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.historicRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.historicRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.historicRef.remove();
  }
}
