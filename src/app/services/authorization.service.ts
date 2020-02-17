import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  login(email, password, action): Observable<any> {
    console.log('attemping to login...')
    const authorized = this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
        sessionStorage.setItem('authenticated', 'true');
        this.router.navigate(['dashboard']);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
    return new Observable(observer => {
      observer.next(authorized);
    })
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
