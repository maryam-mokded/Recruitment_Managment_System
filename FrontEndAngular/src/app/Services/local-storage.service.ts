import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(itemName: string) {
    return JSON.parse(localStorage.getItem(itemName) || '[]') || [];
  }

  set(itemName: string, item: any) {
    localStorage.setItem(itemName, JSON.stringify(item));
  }

  clear(itemName: string) {
    localStorage.removeItem(itemName);
  }

}
