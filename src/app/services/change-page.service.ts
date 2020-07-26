import { Injectable } from '@angular/core';
import { Info } from '../model/info';

@Injectable({
  providedIn: 'root'
})
export class ChangePageService {

  constructor() { }

  changePage(info: Info): number {
    let nextPage: number;
    if (info.next !== null) {
      let currentPage: number;
      const chain = info.next.split('=');
      currentPage = Number(chain[1]) - 1;
      nextPage = currentPage + 1;
    } else {
      nextPage = null;
    }
    return nextPage;
  }
}
