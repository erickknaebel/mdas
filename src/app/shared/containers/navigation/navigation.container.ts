import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as FromStore from '../../../../modules/login/store';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-navigation-container',
  templateUrl: './navigation.container.html',
  styleUrls: ['./navigation.container.scss']
})
export class NavigationContainerComponent implements AfterViewInit {

  authenticated$: Observable<boolean>;

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
    })
  }

  ngAfterViewInit() {

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
