import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uniqueUUID: string;

  constructor() {

    this.uniqueUUID = uuid.v4()
   }

  ngOnInit(): void {
  }

}
