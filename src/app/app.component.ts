import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStore from '../modules/login/store';

@Component({
  selector: 'app-root',
  template: `
 <app-navigation-container></app-navigation-container>
  <div class="container=fluid">
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styles: []
})

export class AppComponent {
  
}
