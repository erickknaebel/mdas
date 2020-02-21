import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container=fluid">
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styles: []
})
export class AppComponent {

}
