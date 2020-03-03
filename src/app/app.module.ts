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
import { effects } from 'src/modules/login/store';

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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './../modules/login/login.module';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { NavigationContainerComponent } from './shared/containers/navigation/navigation.container';
import { RouterModule } from '@angular/router';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationContainerComponent
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
    LoginModule,
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
