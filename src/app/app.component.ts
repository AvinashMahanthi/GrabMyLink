import { Component,Input,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GrabMyLink';
  showLink : boolean = false
  // @ViewChild('form')
  // form: NgForm;

  @Input() Year!: string;
  @Input() Branch!: string;

  constructor() {
    
  }

  ngOnInIt() {
    this.showLink = false
  // var Info = { Year: this.Year, Branch: this.Branch };
  }

  async submit() {
    this.showLink= true
    this.Year = this.Year,
      this.Branch=this.Branch 
      console.log(this.Year, this.Branch);
  }

}
