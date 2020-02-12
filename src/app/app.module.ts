// Angular Material Compnents
import {
  MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatToolbarModule,
  MatListModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatButtonToggleModule, MatStepperModule, MatTableModule, MatIconModule
} from '@angular/material';

// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

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
  ],
  providers: [AngularFireDatabase, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
