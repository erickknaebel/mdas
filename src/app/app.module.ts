import { AuthorizationService } from './services/authorization.service';
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

/** Firebase for Angular */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './../modules/login/login.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule,
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
    StoreModule.forRoot({
      // user: loginReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [AngularFireDatabase, AngularFirestore, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
