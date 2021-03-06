import { Component, Input, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  @Input() info: { Year: string; Branch: string; };
  constructor() { }

  ngOnInit(): void {
    console.log("this is result");
    // console.log(this.Year, this.Branch);
  }

}
