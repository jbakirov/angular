import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent{
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;

  constructor(){
    this.jbtHeading = 'Hello Worlds';
    this.jbtText = 'Some text';
    this.jbtBtnText = 'Read more';
    this.jbtBtnUrl = 'http://google.com';
  }
}
