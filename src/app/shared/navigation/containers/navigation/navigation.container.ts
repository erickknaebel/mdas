import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as FromStore from '../../../../../modules/login/store';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation.container.html',
  styleUrls: ['./navigation.container.scss']
})
export class NavigationContainerComponent {

  authenticated$: Observable<any>;

  @ViewChild('navigation', { read: ViewContainerRef, static: false }) navigation: ViewContainerRef;

  constructor(
    private store: Store<FromStore.AuthenticationState>,
    private cfr: ComponentFactoryResolver
  ) {
    this.authenticated$ = this.store.select(FromStore.getUserLoaded);
    this.authenticated$.subscribe(value => {
      console.log(value)
      if (value) {
        this.renderNavigation();
      }
    })
  }

  renderNavigation() {
    const cf = this.cfr.resolveComponentFactory(NavigationComponent);
    this.navigation.clear();
    const nav = this.navigation.createComponent(cf).instance;
  }

  removeNavigation() {
    this.navigation.clear();
  }
  
}
