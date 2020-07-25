import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  valueInput: string;

  constructor(private routes: Router) { }

  ngOnInit() {
    this.valueInput = '';
  }

  search(): void {
    if (this.valueInput !== '') {
      this.routes.navigate(['filter/', this.valueInput]);
    }
  }

}
