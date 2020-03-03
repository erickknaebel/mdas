import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';
import * as FromStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss']
})
export class DashboardContainerComponent implements OnInit {

  items$: Observable<any>;

  constructor(private store: Store<FromStore.DashboardState>) { }

  ngOnInit() {
    this.items$ = this.store.select(FromStore.getDashboardInfo);
    this.store.dispatch(new FromStore.Dashboard());
  }

}