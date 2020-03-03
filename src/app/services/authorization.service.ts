import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserData } from 'src/modules/login/models/dashboard';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  login(email, password): Observable<any> {
    return new Observable(observer => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          observer.next(res);
          this.router.navigate(['dashboard']);
        }, error => observer.next(error));
    });
  }

  signUp() {
    console.log('sign up...')

    return new Observable(observer => {
      observer.next();
    })
  }

  logout() {
    console.log('logout...')
  }
}
