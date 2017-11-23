import {Component} from '@angular/core';
import  {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class NavBarComponent{
  private projectName:string;

  constructor(){
    this.projectName = 'Angular 2 Website';
  }
}
