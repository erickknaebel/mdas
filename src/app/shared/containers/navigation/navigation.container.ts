import { Component,ComponentFactoryResolver, ViewChild, ViewContainerRef, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as FromStore from '../../../../modules/login/store';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation.container.html',
  styleUrls: ['./navigation.container.scss']
})
export class NavigationContainerComponent {

  @Input() authenticated$: Observable<any>;

  @ViewChild('navigation', { read: ViewContainerRef, static: false }) navigation: ViewContainerRef;
  
  constructor(
    private store: Store<FromStore.AuthenticationState>,
    private cfr: ComponentFactoryResolver
  ) {
    this.authenticated$ = this.store.select(FromStore.getUserLoaded);
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
    const data = FromStore.getUserInfo;
    nav.instance.userName = "Erick";
  }

  removeNavigation() {
    this.navigation.clear();
  }
  
}
