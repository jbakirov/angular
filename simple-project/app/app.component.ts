import {Component} from '@angular/core';
import {NavBarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {ROUTER_DIRECTIVES} from '@anuglar/router';

@Component({
  selector: 'my-app',
  template: '<navbar></navbar><jumbotron></jumbotron><router-outlet></router-outlet>',
  directives: [NavBarComponent, JumbotronComponent, HomeComponent, AboutComponent, ROUTER_DIRECTIVES]
})

export class AppComponent{}
