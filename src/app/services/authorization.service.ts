import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  // authenticationData: BehaviorSubject<any> = new BehaviorSubject(null);
  // isAuthenticated$ = this.authenticationData.asObservable();

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  userSession(): Observable<any> {
    return this.firebaseAuth.user;
  }

  login(email, password): Observable<any> {
    return new Observable(observer => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          // console.log(res)
          // this.authenticationData.next(res);
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
