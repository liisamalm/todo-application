import { Component, OnInit } from '@angular/core';
import { faListCheck, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  faListCheck = faListCheck;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
