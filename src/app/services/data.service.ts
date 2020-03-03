import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  getRecords(params: string) {
    return this.db.list(params).valueChanges();
  }

  getRecord(params: string, key?: string) {
    return this.db.list(params).valueChanges();
  }
}
