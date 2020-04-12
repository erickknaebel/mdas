/** Angular Material */
import {
  MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatToolbarModule,
  MatListModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatButtonToggleModule, MatStepperModule, MatTableModule, MatIconModule
} from '@angular/material';

/** NGRX Imports */
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { reducers, CustomSerializer } from './store';
import { effects } from './store/effects';

/** Firebase for Angular */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

/** Services */
import { AuthorizationService } from './services/authorization.service';
import { DataService } from './services/data.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, ROUTES } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import * as FromSharedComponents from './shared/components';
import * as FromSharedContainers from './shared/containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FromSharedComponents.SharedComponents,
    FromSharedContainers.SharedContainers
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot(effects),
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatTableModule,
    MatIconModule,
    StoreRouterConnectingModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    AngularFireDatabase,
    AngularFirestore,
    DataService,
    AuthorizationService,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  entryComponents: [NavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
