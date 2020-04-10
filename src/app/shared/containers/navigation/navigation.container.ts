import { Component,ComponentFactoryResolver, ViewChild, ViewContainerRef, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as FromStore from '../../../../modules/login/store';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import * as AuthenticationStatus from '../../classes/authentication.state';
import * as Classes from '../../classes/authentication.state';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation.container.html',
  styleUrls: ['./navigation.container.scss']
})
export class NavigationContainerComponent {

  @Input() authenticated$: Observable<any>;

  @ViewChild('navigation', { read: ViewContainerRef, static: false }) navigation: ViewContainerRef;
  
  constructor(
    private store: Store<AuthenticationStatus.AuthenticationState>,
    private cfr: ComponentFactoryResolver
  ) {
    this.authenticated$ = this.store.select(Classes.getUserLoaded);
    this.authenticated$.subscribe(value => {
      if (value) {
        this.renderNavigation();
      }
    });
  }

  renderNavigation() {
    const cf = this.cfr.resolveComponentFactory(NavigationComponent);
    this.navigation.clear();
    const nav = this.navigation.createComponent(cf);
    const data = Classes.getUserInfo;
    nav.instance.userName = "Erick";
  }

  removeNavigation() {
    this.navigation.clear();
  }
  
}
